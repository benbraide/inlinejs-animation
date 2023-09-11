import { AnimationActorCallbackType, AnimationEaseCallbackType, GetGlobal, IAnimationActor, IAnimationConcept, IAnimationEase } from "@benbraide/inlinejs";
import { CustomElement } from "@benbraide/inlinejs-element";

export function ResolveActorName(el: IAnimationActor, name: string, value: string){
    if (name === value){
        return value;
    }
    
    const concept = GetGlobal().GetConcept<IAnimationConcept>('animation');
    if (concept){
        name && concept.GetActorCollection().Remove(name);
        value && concept.GetActorCollection().Add(el, value);
    }

    return value;
}

export function ResolveEaseName(el: IAnimationEase, name: string, value: string){
    if (name === value){
        return value;
    }
    
    const concept = GetGlobal().GetConcept<IAnimationConcept>('animation');
    if (concept){
        name && concept.GetEaseCollection().Remove(name);
        value && concept.GetEaseCollection().Add(el, value);
    }

    return value;
}

export function ResolveActor(el: CustomElement, value: string | IAnimationActor | AnimationActorCallbackType){
    const actor = ((typeof value === 'string') ? (GetGlobal().GetConcept<IAnimationConcept>('animation')?.GetActorCollection().Find(value) || null) : value);
    if (actor || el.IsTemplate()){
        return actor;
    }

    for (let child of el.children){
        if ('IsAnimationActor' in child && typeof child['IsAnimationActor'] === 'function' && child['IsAnimationActor']()){
            return (child as unknown as IAnimationActor);
        }
    }

    return null;
}

export function ResolveEase(el: CustomElement, value: string | IAnimationEase | AnimationEaseCallbackType){
    const actor = ((typeof value === 'string') ? (GetGlobal().GetConcept<IAnimationConcept>('animation')?.GetEaseCollection().Find(value) || null) : value);
    if (actor || el.IsTemplate()){
        return actor;
    }

    for (let child of el.children){
        if ('IsAnimationEase' in child && typeof child['IsAnimationEase'] === 'function' && child['IsAnimationEase']()){
            return (child as unknown as IAnimationEase);
        }
    }

    return null;
}

export function ResolveNumeric(value: string){
    const numeric = GetGlobal().GetConcept<IAnimationConcept>('animation')?.GetNamedNumericCollection().Find(value);
    if (typeof numeric === 'number'){
        return numeric;
    }
    
    if (/^\d+ms$/.test(value)){//Milliseconds
        return parseInt(value.substring(0, (value.length - 2)));
    }

    if (/^\d+(\.\d+)?s$/.test(value)){//Seconds
        return Math.floor(parseInt(value.substring(0, (value.length - 1))) * 1000);
    }
    
    return Math.floor(parseInt(value) || 0);
}

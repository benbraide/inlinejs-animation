import { AnimationActorCallbackType, AnimationEaseCallbackType, GetGlobal, IAnimationConcept } from "@benbraide/inlinejs";

export function FindFirst(name: string): [AnimationActorCallbackType | null, AnimationEaseCallbackType | null, number | null] | null{
    const concept = GetGlobal().GetConcept<IAnimationConcept>('animation');
    if (!concept){
        return null;
    }

    const actor = concept.GetActorCollection().Find(name);
    if (actor){
        return [actor, null, null];
    }

    const ease = concept.GetEaseCollection().Find(name);
    if (ease){
        return [null, ease, null];
    }

    const numeric = concept.GetNamedNumericCollection().Find(name);
    if (numeric !== null){
        return [null, null, numeric];
    }

    return null;
}

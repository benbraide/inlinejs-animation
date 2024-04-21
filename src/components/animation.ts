import { AnimationEaseCallbackType, EvaluateLater, IAnimationActorParams, IAnimationEase } from "@benbraide/inlinejs";
import { Property, RegisterCustomElement } from "@benbraide/inlinejs-element";
import { AnimationActorElement } from "./actor";
import { ResolveEase } from "../utilities/resolve";

export class AnimationElement extends AnimationActorElement{
    @Property({ type: 'string' })
    public expression = '';

    @Property({ type: 'string', checkStoredObject: true })
    public ease: string | IAnimationEase | AnimationEaseCallbackType = '';
    
    public constructor(){
        super();
        this.DisableTemplate_();
    }

    public Handle(params: IAnimationActorParams){
        if (this.expression){
            EvaluateLater({
                componentId: this.componentId_,
                contextElement: this,
                expression: this.expression,
                disableFunctionCall: false,
            })(undefined, [], params);
        }
        else{
            this.Handle_(params, ResolveEase(this, this.ease), this.IsTimeRelative());
        }
    }

    public HandleFraction(fraction: number){
        const actor = <any>this.ResolveActor_();
        return ((actor && 'HandleFraction' in actor && typeof actor['HandleFraction'] === 'function') ? actor['HandleFraction'](fraction) : null);
    }

    public IsTimeRelative(){
        const actor = <any>this.ResolveActor_();
        return (actor && 'IsTimeRelative' in actor && typeof actor['IsTimeRelative'] === 'function' && actor['IsTimeRelative']());
    }
}

export function AnimationElementCompact(){
    RegisterCustomElement(AnimationElement, 'animation');
}

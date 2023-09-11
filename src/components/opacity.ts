import { IAnimationActor } from "@benbraide/inlinejs";
import { Property, RegisterCustomElement } from "@benbraide/inlinejs-element";
import { AnimationPersonalActorElement } from "./personal";

export class AnimationOpacity extends AnimationPersonalActorElement implements IAnimationActor{
    @Property({ type: 'number' })
    public from = 0;

    @Property({ type: 'number' })
    public to = 1;
    
    public constructor(){
        super();
    }

    public GetName(){
        return '{AnimationOpacityElement}';
    }

    protected CreateActor_(){
        let from = (this.from || 0), to = (this.to || 1), factor = (to - from);
        return ({ fraction, target, stage }) => {
            target.style.opacity = (from + (factor * fraction)).toString();
            (stage === 'end') && target.style.removeProperty('opacity');
        };
    }
}

export function AnimationOpacityElementCompact(){
    RegisterCustomElement(AnimationOpacity);
}
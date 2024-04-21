import { Property, RegisterCustomElement } from "@benbraide/inlinejs-element";
import { AnimationActorElement } from "./actor";

export class AnimationSliceElement extends AnimationActorElement{
    @Property({ type: 'number' })
    public from = 0;

    @Property({ type: 'number' })
    public to = 1;

    @Property({ type: 'boolean' })
    public timeRelative = false;
    
    public constructor(){
        super();
        this.DisableTemplate_();
    }

    public HandleFraction(fraction: number){
        if ((this.from || 0) <= fraction && (this.to || 1) >= fraction){
            return ((fraction - (this.from || 0)) / ((this.to || 1) - (this.from || 0)));
        }
        return null;
    }

    public IsTimeRelative(){
        return this.timeRelative;
    }
}

export function AnimationSliceElementCompact(){
    RegisterCustomElement(AnimationSliceElement, 'animation-slice');
}

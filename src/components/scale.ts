import { Property, RegisterCustomElement } from "@benbraide/inlinejs-element";
import { CreateScaleAnimationCallback, ScaleAnimatorActorAxisType, ScaleAnimatorActorOriginType } from "../actors/scale/generic";
import { AnimationPersonalActorElement } from "./personal";

export class AnimationScaleElement extends AnimationPersonalActorElement{
    @Property({ type: 'string' })
    public axis: ScaleAnimatorActorAxisType = 'both';

    @Property({ type: 'string' })
    public from = '';

    @Property({ type: 'string' })
    public to = '';

    @Property({ type: 'number' })
    public factor = 0;

    @Property({ type: 'number' })
    public offset = 0;

    @Property({ type: 'string', spread: 'origin' })
    public x: ScaleAnimatorActorOriginType = 'center';

    @Property({ type: 'string', spread: 'origin' })
    public y: ScaleAnimatorActorOriginType = 'center';
    
    public constructor(){
        super();
    }

    protected CreateActor_(){
        return CreateScaleAnimationCallback({
            axis: this.axis,
            origin: { x: (this.x || 'center'), y: (this.y || 'center') },
            from: (this.from ? (parseFloat(this.from) || 0) : undefined),
            to: (this.to ? (parseFloat(this.to) || 0) : undefined),
            factor: this.factor,
            offset: this.offset,
        });
    }
}

export function AnimationScaleElementCompact(){
    RegisterCustomElement(AnimationScaleElement, 'animation-scale');
}

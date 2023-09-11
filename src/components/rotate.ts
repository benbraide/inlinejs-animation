import { IAnimationActor } from "@benbraide/inlinejs";
import { CreateRotateAnimationCallback, RotateAnimationActorAxisType, RotateAnimatorActorOriginType } from "../actors/rotate/generic";
import { AnimationPersonalActorElement } from "./personal";
import { Property, RegisterCustomElement } from "@benbraide/inlinejs-element";

export class AnimationRotate extends AnimationPersonalActorElement implements IAnimationActor{
    @Property({ type: 'string' })
    public axis: RotateAnimationActorAxisType = 'z';

    @Property({ type: 'string' })
    public unit = 'deg';
    
    @Property({ type: 'string' })
    public from = '';

    @Property({ type: 'string' })
    public to = '';

    @Property({ type: 'number' })
    public factor = 0;

    @Property({ type: 'string', spread: 'origin' })
    public x: RotateAnimatorActorOriginType = 'center';

    @Property({ type: 'string', spread: 'origin' })
    public y: RotateAnimatorActorOriginType = 'center';
    
    public constructor(){
        super();
    }

    public GetName(){
        return '{AnimationRotateElement}';
    }

    protected CreateActor_(){
        return CreateRotateAnimationCallback({
            axis: this.axis,
            unit: this.unit,
            origin: { x: (this.x || 'center'), y: (this.y || 'center') },
            from: (this.from ? (parseFloat(this.from) || 0) : undefined),
            to: (this.to ? (parseFloat(this.to) || 0) : undefined),
            factor: this.factor,
        });
    }
}

export function AnimationRotateElementCompact(){
    RegisterCustomElement(AnimationRotate);
}

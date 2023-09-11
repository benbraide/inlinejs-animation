import { Property, RegisterCustomElement } from "@benbraide/inlinejs-element";
import { AnimationSceneBaseElement } from "./scene-base";
import { RubberbandAnimationCreator } from "../creators/rubberband";

export class AnimationRubberband extends AnimationSceneBaseElement{
    @Property({ type: 'number'})
    public multiplier = 0;
    
    public constructor(){
        super();
    }

    protected CreateActor_(){
        return RubberbandAnimationCreator({
            factor: this.factor,
            multiplier: this.multiplier,
            origin: { x: this.x, y: this.y },
        });
    }
}

export function AnimationRubberbandElementCompact(){
    RegisterCustomElement(AnimationRubberband);
}

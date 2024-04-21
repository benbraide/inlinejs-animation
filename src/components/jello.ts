import { Property, RegisterCustomElement } from "@benbraide/inlinejs-element";
import { AnimationSceneBaseElement } from "./scene-base";
import { JelloAnimationCreator } from "../creators/jello";

export class AnimationJelloElement extends AnimationSceneBaseElement{
    @Property({ type: 'number'})
    public divisor = 0;
    
    public constructor(){
        super();
    }

    protected CreateActor_(){
        return JelloAnimationCreator({
            factor: this.factor,
            divisor: this.divisor,
            unit: this.unit,
            origin: { x: this.x, y: this.y },
        });
    }
}

export function AnimationJelloElementCompact(){
    RegisterCustomElement(AnimationJelloElement, 'animation-jello');
}

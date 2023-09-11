import { Property, RegisterCustomElement } from "@benbraide/inlinejs-element";
import { AnimationSceneBaseElement } from "./scene-base";
import { TadaAnimationCreator } from "../creators/tada";

export class AnimationTada extends AnimationSceneBaseElement{
    @Property({ type: 'number'})
    public fromFactor = 0;

    @Property({ type: 'number'})
    public toFactor = 0;
    
    public constructor(){
        super();
    }

    protected CreateActor_(){
        return TadaAnimationCreator({
            factor: this.factor,
            fromFactor: this.fromFactor,
            toFactor: this.toFactor,
            unit: this.unit,
            origin: { x: this.x, y: this.y },
        });
    }
}

export function AnimationTadaElementCompact(){
    RegisterCustomElement(AnimationTada);
}

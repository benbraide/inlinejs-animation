import { RegisterCustomElement } from "@benbraide/inlinejs-element";
import { CreatePulseSceneAnimationActor } from "../actors/scene/pulse";
import { AnimationSceneBaseElement } from "./scene-base";

export class AnimationPulseElement extends AnimationSceneBaseElement{
    public constructor(){
        super();
    }

    protected CreateActor_(){
        return CreatePulseSceneAnimationActor(this.factor, { x: this.x, y: this.y });
    }
}

export function AnimationPulseElementCompact(){
    RegisterCustomElement(AnimationPulseElement, 'animation-pulse');
}

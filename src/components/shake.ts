import { RegisterCustomElement } from "@benbraide/inlinejs-element";
import { CreateShakeSceneAnimationActor } from "../actors/scene/shake";
import { AnimationSceneBaseElement } from "./scene-base";

export class AnimationShakeElement extends AnimationSceneBaseElement{
    public constructor(){
        super();
    }

    protected CreateActor_(){
        return CreateShakeSceneAnimationActor(this.factor, (this.unit || 'px'), { x: this.x, y: this.y });
    }
}

export function AnimationShakeElementCompact(){
    RegisterCustomElement(AnimationShakeElement, 'animation-shake');
}

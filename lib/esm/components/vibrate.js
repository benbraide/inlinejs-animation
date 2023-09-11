import { RegisterCustomElement } from "@benbraide/inlinejs-element";
import { CreateVibrateSceneAnimationActor } from "../actors/scene/vibrate";
import { AnimationSceneBaseElement } from "./scene-base";
export class AnimationVibrate extends AnimationSceneBaseElement {
    constructor() {
        super();
    }
    CreateActor_() {
        return CreateVibrateSceneAnimationActor(this.factor, (this.unit || 'deg'), { x: this.x, y: this.y });
    }
}
export function AnimationVibrateElementCompact() {
    RegisterCustomElement(AnimationVibrate);
}

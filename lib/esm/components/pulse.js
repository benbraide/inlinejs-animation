import { RegisterCustomElement } from "@benbraide/inlinejs-element";
import { CreatePulseSceneAnimationActor } from "../actors/scene/pulse";
import { AnimationSceneBaseElement } from "./scene-base";
export class AnimationPulse extends AnimationSceneBaseElement {
    constructor() {
        super();
    }
    CreateActor_() {
        return CreatePulseSceneAnimationActor(this.factor, { x: this.x, y: this.y });
    }
}
export function AnimationPulseElementCompact() {
    RegisterCustomElement(AnimationPulse);
}

import { RegisterCustomElement } from "@benbraide/inlinejs-element";
import { CreateHeartbeatSceneAnimationActor } from "../actors/scene/heartbeat";
import { AnimationSceneBaseElement } from "./scene-base";
export class AnimationHeartbeat extends AnimationSceneBaseElement {
    constructor() {
        super();
    }
    CreateActor_() {
        return CreateHeartbeatSceneAnimationActor(this.factor, { x: this.x, y: this.y });
    }
}
export function AnimationHeartbeatElementCompact() {
    RegisterCustomElement(AnimationHeartbeat);
}

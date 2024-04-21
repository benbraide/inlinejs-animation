import { RegisterCustomElement } from "@benbraide/inlinejs-element";
import { CreateHeartbeatSceneAnimationActor } from "../actors/scene/heartbeat";
import { AnimationSceneBaseElement } from "./scene-base";

export class AnimationHeartbeatElement extends AnimationSceneBaseElement{
    public constructor(){
        super();
    }

    protected CreateActor_(){
        return CreateHeartbeatSceneAnimationActor(this.factor, { x: this.x, y: this.y });
    }
}

export function AnimationHeartbeatElementCompact(){
    RegisterCustomElement(AnimationHeartbeatElement, 'animation-heartbeat');
}

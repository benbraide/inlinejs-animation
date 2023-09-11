import { IAnimationActor } from "@benbraide/inlinejs";
import { AnimationPersonalActorElement } from "./personal";
import { SceneAnimatorActorOriginType } from "../actors/scene/generic";
export declare class AnimationSceneBaseElement extends AnimationPersonalActorElement implements IAnimationActor {
    factor: number;
    unit: string;
    x: SceneAnimatorActorOriginType;
    y: SceneAnimatorActorOriginType;
    constructor();
    GetName(): string;
}

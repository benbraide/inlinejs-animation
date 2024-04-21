import { AnimationPersonalActorElement } from "./personal";
import { SceneAnimatorActorOriginType } from "../actors/scene/generic";
export declare class AnimationSceneBaseElement extends AnimationPersonalActorElement {
    factor: number;
    unit: string;
    x: SceneAnimatorActorOriginType;
    y: SceneAnimatorActorOriginType;
    constructor();
}

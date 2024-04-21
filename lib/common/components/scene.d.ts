import { ISceneAnimationFrame, SceneAnimatorActorOriginType } from "../actors/scene/generic";
import { AnimationPersonalActorElement } from "./personal";
export declare class AnimationSceneElement extends AnimationPersonalActorElement {
    private acts_;
    private idOffset_;
    x: SceneAnimatorActorOriginType;
    y: SceneAnimatorActorOriginType;
    constructor();
    AddSceneAct(act: ISceneAnimationFrame): string;
    RemoveSceneAct(target: string | ISceneAnimationFrame): void;
    protected CreateActor_(): import("@benbraide/inlinejs").AnimationActorCallbackType;
}
export declare function AnimationSceneElementCompact(): void;

import { IAnimationActor } from "@benbraide/inlinejs";
import { ISceneAnimationFrame, SceneAnimatorActorOriginType } from "../actors/scene/generic";
import { AnimationPersonalActorElement } from "./personal";
export declare class AnimationScene extends AnimationPersonalActorElement implements IAnimationActor {
    private acts_;
    private idOffset_;
    x: SceneAnimatorActorOriginType;
    y: SceneAnimatorActorOriginType;
    constructor();
    GetName(): string;
    AddSceneAct(act: ISceneAnimationFrame): string;
    RemoveSceneAct(id: string): void;
    protected CreateActor_(): import("@benbraide/inlinejs").AnimationActorCallbackType;
}
export declare function AnimationSceneElementCompact(): void;

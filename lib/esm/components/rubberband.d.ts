import { AnimationSceneBaseElement } from "./scene-base";
export declare class AnimationRubberbandElement extends AnimationSceneBaseElement {
    multiplier: number;
    constructor();
    protected CreateActor_(): import("@benbraide/inlinejs").AnimationActorCallbackType;
}
export declare function AnimationRubberbandElementCompact(): void;

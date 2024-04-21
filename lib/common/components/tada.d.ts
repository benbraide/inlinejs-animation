import { AnimationSceneBaseElement } from "./scene-base";
export declare class AnimationTadaElement extends AnimationSceneBaseElement {
    fromFactor: number;
    toFactor: number;
    constructor();
    protected CreateActor_(): import("@benbraide/inlinejs").AnimationActorCallbackType;
}
export declare function AnimationTadaElementCompact(): void;

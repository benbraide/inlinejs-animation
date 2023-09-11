import { IScaleAnimatorActorOrigin } from "../actors/scale/generic";
export interface ITadaAnimationCallbackInfo {
    factor?: number;
    fromFactor?: number;
    toFactor?: number;
    unit?: string;
    origin?: IScaleAnimatorActorOrigin;
}
export declare function TadaAnimationCreator({ factor, fromFactor, toFactor, unit, origin }?: ITadaAnimationCallbackInfo): import("@benbraide/inlinejs").AnimationActorCallbackType;

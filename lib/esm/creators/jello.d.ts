import { IScaleAnimatorActorOrigin } from "../actors/scale/generic";
export interface IJelloAnimationCallbackInfo {
    factor?: number;
    divisor?: number;
    unit?: string;
    origin?: IScaleAnimatorActorOrigin;
}
export declare function JelloAnimationCreator({ factor, divisor, unit, origin }?: IJelloAnimationCallbackInfo): import("@benbraide/inlinejs").AnimationActorCallbackType;

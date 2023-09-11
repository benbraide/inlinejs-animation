import { IScaleAnimatorActorOrigin } from "../actors/scale/generic";
export interface IRubberbandAnimationCallbackInfo {
    factor?: number;
    multiplier?: number;
    origin?: IScaleAnimatorActorOrigin;
}
export declare function RubberbandAnimationCreator({ factor, multiplier, origin }?: IRubberbandAnimationCallbackInfo): import("@benbraide/inlinejs").AnimationActorCallbackType;

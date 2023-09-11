import { IScaleAnimatorActorOrigin } from "../actors/scale/generic";
export interface ISwingAnimationCallbackInfo {
    factor?: number;
    unit?: string;
    origin?: IScaleAnimatorActorOrigin;
}
export declare function SwingAnimationCreator({ factor, unit, origin: { x, y } }?: ISwingAnimationCallbackInfo): import("@benbraide/inlinejs").AnimationActorCallbackType;

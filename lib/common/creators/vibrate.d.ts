export interface IVibrateAnimationCallbackInfo {
    displacement?: number;
    unit?: string;
}
export declare function VibrateAnimationCreator({ displacement, unit }?: IVibrateAnimationCallbackInfo): import("@benbraide/inlinejs").AnimationActorCallbackType;

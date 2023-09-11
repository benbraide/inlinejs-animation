export interface IShakeAnimationCallbackInfo {
    displacement?: number;
    unit?: string;
}
export declare function ShakeAnimationCreator({ displacement, unit }?: IShakeAnimationCallbackInfo): import("@benbraide/inlinejs").AnimationActorCallbackType;

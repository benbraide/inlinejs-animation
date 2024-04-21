import { IAnimationEase, IAnimationEaseParams, AnimationEaseCallbackType } from "@benbraide/inlinejs";
export declare class CompositeAnimationEase implements IAnimationEase {
    private eases_;
    constructor(eases: Array<IAnimationEase | AnimationEaseCallbackType>);
    GetName(): string;
    Handle(params: IAnimationEaseParams): number;
    AddEase(ease: IAnimationEase | AnimationEaseCallbackType): void;
    RemoveEase(ease: IAnimationEase | AnimationEaseCallbackType): void;
    RemoveAll(): void;
}

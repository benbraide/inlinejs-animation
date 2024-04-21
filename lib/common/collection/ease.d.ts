import { AnimationEaseCallbackType, IAnimationEase, IAnimationEaseCollection } from "@benbraide/inlinejs";
export declare class AnimationEaseCollection implements IAnimationEaseCollection {
    private handlers_;
    Add(handler: IAnimationEase | AnimationEaseCallbackType, name?: string): void;
    Remove(target: string | IAnimationEase | AnimationEaseCallbackType): void;
    Find(name: string): AnimationEaseCallbackType | null;
}

import { AnimationEaseCallbackType, IAnimationEase, IAnimationEaseCollection } from "@benbraide/inlinejs";
export declare class AnimationEaseCollection implements IAnimationEaseCollection {
    private handlers_;
    Add(handler: IAnimationEase | AnimationEaseCallbackType, name?: string): void;
    Remove(name: string): void;
    Find(name: string): AnimationEaseCallbackType | null;
}

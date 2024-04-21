import { AnimationCreatorCallbackType, IAnimationCreatorCollection } from "@benbraide/inlinejs";
export declare class AnimationCreatorCollection implements IAnimationCreatorCollection {
    private list_;
    Add(name: string, creator: AnimationCreatorCallbackType): void;
    Remove(target: string | AnimationCreatorCallbackType): void;
    Find(name: string): AnimationCreatorCallbackType | null;
}

import { AnimationCreatorCallbackType, IAnimationCreatorCollection } from "@benbraide/inlinejs";
export declare class AnimationCreatorCollection implements IAnimationCreatorCollection {
    private list_;
    Add(name: string, creator: AnimationCreatorCallbackType): void;
    Remove(name: string): void;
    Find(name: string): AnimationCreatorCallbackType | null;
}

import { IAnimationNamedNumericCollection } from "@benbraide/inlinejs";
export declare class AnimationNameNumericCollection implements IAnimationNamedNumericCollection {
    private values_;
    Add(name: string, value: number): void;
    Remove(name: string): void;
    Find(name: string): number | null;
}

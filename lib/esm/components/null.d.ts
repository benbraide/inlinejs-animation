import { IAnimationActor } from "@benbraide/inlinejs";
import { AnimationElement } from "./base";
export declare class AnimationNull extends AnimationElement implements IAnimationActor {
    constructor();
    GetName(): string;
    Handle(): void;
}
export declare function AnimationNullElementCompact(): void;

import { AnimationEaseCallbackType, IAnimationEase, IAnimationEaseParams } from "@benbraide/inlinejs";
import { AnimationElement } from "./base";
export declare class EaseBezier extends AnimationElement implements IAnimationEase {
    protected actor_: AnimationEaseCallbackType | null;
    p1: number;
    p2: number;
    p3: number;
    p4: number;
    constructor();
    GetName(): string;
    Handle(params: IAnimationEaseParams): number;
}
export declare function EaseBezierElementCompact(): void;

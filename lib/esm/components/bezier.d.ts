import { AnimationEaseCallbackType, IAnimationEaseParams } from "@benbraide/inlinejs";
import { AnimationBaseEaseElement } from "./ease-base";
export declare class EaseBezierElement extends AnimationBaseEaseElement {
    protected actor_: AnimationEaseCallbackType | null;
    p1: number;
    p2: number;
    p3: number;
    p4: number;
    constructor();
    Handle(params: IAnimationEaseParams): number;
    protected AttributeChanged_(name: string): void;
}
export declare function EaseBezierElementCompact(): void;

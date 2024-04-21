import { ITransitionParams } from "@benbraide/inlinejs";
import { AnimationBaseElement } from "./base";
export declare class AnimateContentElement extends AnimationBaseElement {
    overlap: number;
    alternate: boolean;
    reset: boolean;
    sequence: boolean;
    reverse: boolean;
    constructor();
    WaitTransition({ componentId, callback, onAbort, reverse }: ITransitionParams): (() => void) | null;
}
export declare function AnimateContentElementCompact(): void;

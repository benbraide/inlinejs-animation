import { ITransitionParams } from "@benbraide/inlinejs";
import { AnimationElement } from "./base";
export declare class AnimateContent extends AnimationElement {
    overlap: number;
    alternate: boolean;
    reset: boolean;
    sequence: boolean;
    reverse: boolean;
    constructor();
    WaitTransition({ componentId, callback, onAbort, reverse }: ITransitionParams): (() => void) | null;
}
export declare function AnimateContentElementCompact(): void;

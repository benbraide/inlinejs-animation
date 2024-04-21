import { AnimationEaseCallbackType, IAnimationActorParams, IAnimationEase } from "@benbraide/inlinejs";
import { AnimationActorElement } from "./actor";
export declare class AnimationElement extends AnimationActorElement {
    expression: string;
    ease: string | IAnimationEase | AnimationEaseCallbackType;
    constructor();
    Handle(params: IAnimationActorParams): void;
    HandleFraction(fraction: number): any;
    IsTimeRelative(): any;
}
export declare function AnimationElementCompact(): void;

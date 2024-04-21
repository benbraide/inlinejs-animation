import { IAnimationEaseParams } from "@benbraide/inlinejs";
import { AnimationEaseActorElement } from "./ease-actor";
export declare class EaseElement extends AnimationEaseActorElement {
    expression: string;
    constructor();
    Handle(params: IAnimationEaseParams): number;
}
export declare function EaseElementCompact(): void;

import { IAnimationEase, IAnimationEaseParams } from "@benbraide/inlinejs";
import { AnimationEaseActorElement } from "./ease-actor";
export declare class Ease extends AnimationEaseActorElement implements IAnimationEase {
    protected name_: string;
    UpdateNameProperty(value: string): void;
    expression: string;
    constructor();
    GetName(): string;
    Handle(params: IAnimationEaseParams): number;
}
export declare function EaseElementCompact(): void;

import { AnimationEaseCallbackType, IAnimationActor, IAnimationActorParams, IAnimationEase } from "@benbraide/inlinejs";
import { AnimationActorElement } from "./actor";
export declare class Animation extends AnimationActorElement implements IAnimationActor {
    protected name_: string;
    UpdateNameProperty(value: string): void;
    expression: string;
    ease: string | IAnimationEase | AnimationEaseCallbackType;
    constructor();
    GetName(): string;
    Handle(params: IAnimationActorParams): void;
    HandleFraction(fraction: number): any;
    IsTimeRelative(): any;
}
export declare function AnimationElementCompact(): void;

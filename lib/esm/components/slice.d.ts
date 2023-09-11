import { IAnimationActor, IElementScopeCreatedCallbackParams } from "@benbraide/inlinejs";
import { AnimationActorElement } from "./actor";
export declare class AnimationSlice extends AnimationActorElement implements IAnimationActor {
    from: number;
    to: number;
    timeRelative: boolean;
    constructor();
    GetName(): string;
    HandleFraction(fraction: number): number | null;
    IsTimeRelative(): boolean;
    protected HandleElementScopeCreated_({ scope, ...rest }: IElementScopeCreatedCallbackParams, postAttributesCallback?: (() => void) | undefined): void;
    protected AddToParent_(): void;
}
export declare function AnimationSliceElementCompact(): void;

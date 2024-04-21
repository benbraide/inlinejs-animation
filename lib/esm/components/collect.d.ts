import { IAnimationActorParams, IElementScopeCreatedCallbackParams } from "@benbraide/inlinejs";
import { AnimationBaseActorElement } from "./actor-base";
export declare class AnimationCollectElement extends AnimationBaseActorElement {
    private actor_;
    constructor();
    Handle(params: IAnimationActorParams): void;
    protected HandleElementScopeCreated_({ scope, ...rest }: IElementScopeCreatedCallbackParams, postAttributesCallback?: (() => void) | undefined): void;
    protected RefreshCollection_(): void;
}
export declare function AnimationCollectElementCompact(): void;

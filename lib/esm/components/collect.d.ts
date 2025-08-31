import { IAnimationActorParams, IElementScope, IElementScopeCreatedCallbackParams } from "@benbraide/inlinejs";
import { AnimationBaseActorElement } from "./actor-base";
export declare class AnimationCollectElement extends AnimationBaseActorElement {
    private actor_;
    constructor();
    Handle(params: IAnimationActorParams): void;
    protected HandleElementScopeCreatedPostfix_({ scope, ...rest }: IElementScopeCreatedCallbackParams): void;
    protected HandleElementScopeDestroyed_(scope: IElementScope): void;
    protected HandlePostProcess_(): void;
    protected RefreshCollection_(): void;
}
export declare function AnimationCollectElementCompact(): void;

import { IAnimationActor, IAnimationActorParams, IElementScopeCreatedCallbackParams } from "@benbraide/inlinejs";
import { AnimationElement } from "./base";
export declare class AnimationCollect extends AnimationElement implements IAnimationActor {
    private actor_;
    constructor();
    GetName(): string;
    Handle(params: IAnimationActorParams): void;
    protected HandleElementScopeCreated_({ scope, ...rest }: IElementScopeCreatedCallbackParams, postAttributesCallback?: (() => void) | undefined): void;
}
export declare function AnimationCollectElementCompact(): void;

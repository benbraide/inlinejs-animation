import { AnimationActorCallbackType, AnimationEaseCallbackType, IAnimationActor, IAnimationActorParams, IAnimationEase, IElementScopeCreatedCallbackParams } from "@benbraide/inlinejs";
import { AnimationBaseActorElement } from "./actor-base";
export declare class AnimationActorElement extends AnimationBaseActorElement {
    actor: string | IAnimationActor | AnimationActorCallbackType;
    constructor();
    Handle(params: IAnimationActorParams): void;
    protected HandleElementScopeCreated_({ scope, ...rest }: IElementScopeCreatedCallbackParams, postAttributesCallback?: (() => void) | undefined): void;
    protected Handle_(params: IAnimationActorParams, ease: IAnimationEase | AnimationEaseCallbackType | null, timeRelative?: boolean): void;
    protected ResolveActor_(): IAnimationActor | AnimationActorCallbackType | null;
}

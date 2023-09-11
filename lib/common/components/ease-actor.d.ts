import { AnimationElement } from "./base";
import { AnimationEaseCallbackType, IAnimationEase, IAnimationEaseParams, IElementScopeCreatedCallbackParams } from "@benbraide/inlinejs";
export declare class AnimationEaseActorElement extends AnimationElement {
    actor: string | IAnimationEase | AnimationEaseCallbackType;
    constructor();
    IsAnimationActor(): boolean;
    IsAnimationEase(): boolean;
    Handle(params: IAnimationEaseParams): number;
    protected HandleElementScopeCreated_({ scope, ...rest }: IElementScopeCreatedCallbackParams, postAttributesCallback?: (() => void) | undefined): void;
    protected ResolveActor_(): IAnimationEase | AnimationEaseCallbackType | null;
}

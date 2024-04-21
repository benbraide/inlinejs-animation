import { AnimationEaseCallbackType, IAnimationEase, IAnimationEaseParams, IElementScopeCreatedCallbackParams } from "@benbraide/inlinejs";
import { AnimationBaseEaseElement } from "./ease-base";
export declare class AnimationEaseActorElement extends AnimationBaseEaseElement {
    actor: string | IAnimationEase | AnimationEaseCallbackType;
    constructor();
    IsAnimationActor(): boolean;
    IsAnimationEase(): boolean;
    Handle(params: IAnimationEaseParams): number;
    protected HandleElementScopeCreated_({ scope, ...rest }: IElementScopeCreatedCallbackParams, postAttributesCallback?: (() => void) | undefined): void;
    protected ResolveActor_(): IAnimationEase | AnimationEaseCallbackType | null;
}

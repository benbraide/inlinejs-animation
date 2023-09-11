import { AnimationActorCallbackType, IAnimationActor, IAnimationActorParams, IElementScopeCreatedCallbackParams } from "@benbraide/inlinejs";
import { AnimationElement } from "./base";
export declare class AnimationPersonalActorElement extends AnimationElement {
    protected actor_: IAnimationActor | AnimationActorCallbackType | null;
    constructor();
    Handle(params: IAnimationActorParams): void;
    protected HandleElementScopeCreated_({ scope, ...rest }: IElementScopeCreatedCallbackParams, postAttributesCallback?: (() => void) | undefined): void;
    protected AttributeChanged_(name: string): void;
    protected ShouldRefreshActor_(name: string): boolean;
    protected UpdateActor_(): void;
    protected CreateActor_(): IAnimationActor | AnimationActorCallbackType | null;
}

import { IAnimationActor, IAnimationActorParams, IElementScopeCreatedCallbackParams } from "@benbraide/inlinejs";
import { AnimationBaseElement } from "./base";
export declare class AnimationBaseActorElement extends AnimationBaseElement implements IAnimationActor {
    protected name_: string;
    UpdateNameProperty(value: string): void;
    GetName(): string;
    Handle(params: IAnimationActorParams): void;
    protected HandleElementScopeCreated_({ scope, ...rest }: IElementScopeCreatedCallbackParams, postAttributesCallback?: (() => void) | undefined): void;
}

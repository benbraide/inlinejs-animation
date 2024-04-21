import { IAnimationEase, IAnimationEaseParams, IElementScopeCreatedCallbackParams } from "@benbraide/inlinejs";
import { AnimationBaseElement } from "./base";
export declare class AnimationBaseEaseElement extends AnimationBaseElement implements IAnimationEase {
    protected name_: string;
    UpdateNameProperty(value: string): void;
    GetName(): string;
    Handle({ fraction }: IAnimationEaseParams): number;
    protected HandleElementScopeCreated_({ scope, ...rest }: IElementScopeCreatedCallbackParams, postAttributesCallback?: (() => void) | undefined): void;
}

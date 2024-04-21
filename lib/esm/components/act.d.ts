import { IElementScopeCreatedCallbackParams } from "@benbraide/inlinejs";
import { AnimationBaseElement } from "./base";
export declare class AnimationSceneActElement extends AnimationBaseElement {
    private id_;
    checkpoint: number[];
    transform: string;
    unit: string;
    from: number;
    to: number;
    constructor();
    protected HandleElementScopeCreated_({ scope, ...rest }: IElementScopeCreatedCallbackParams, postAttributesCallback?: (() => void) | undefined): void;
    private AddToParent_;
}
export declare function AnimationSceneActElementCompact(): void;

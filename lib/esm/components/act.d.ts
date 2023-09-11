import { IElementScopeCreatedCallbackParams } from "@benbraide/inlinejs";
import { AnimationElement } from "./base";
export declare class AnimationSceneAct extends AnimationElement {
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

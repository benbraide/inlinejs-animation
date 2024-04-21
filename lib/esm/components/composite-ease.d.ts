import { IAnimationEaseParams, IElementScopeCreatedCallbackParams } from "@benbraide/inlinejs";
import { AnimationBaseEaseElement } from "./ease-base";
export declare class CompositeEaseElement extends AnimationBaseEaseElement {
    private actor_;
    constructor();
    Handle(params: IAnimationEaseParams): number;
    protected HandleElementScopeCreated_({ scope, ...rest }: IElementScopeCreatedCallbackParams, postAttributesCallback?: (() => void) | undefined): void;
    protected RefreshCollection_(): void;
}
export declare function CompositeEaseElementCompact(): void;

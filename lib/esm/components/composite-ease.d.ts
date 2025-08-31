import { IAnimationEaseParams, IElementScopeCreatedCallbackParams, IElementScope } from "@benbraide/inlinejs";
import { AnimationBaseEaseElement } from "./ease-base";
export declare class CompositeEaseElement extends AnimationBaseEaseElement {
    private actor_;
    constructor();
    Handle(params: IAnimationEaseParams): number;
    protected HandleElementScopeCreatedPostfix_({ scope, ...rest }: IElementScopeCreatedCallbackParams): void;
    protected HandleElementScopeDestroyed_(scope: IElementScope): void;
    protected HandlePostProcess_(): void;
    protected RefreshCollection_(): void;
}
export declare function CompositeEaseElementCompact(): void;

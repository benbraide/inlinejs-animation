import { IElementScope } from "@benbraide/inlinejs";
import { AnimationBaseElement } from "./base";
export declare class AnimationSceneActElement extends AnimationBaseElement {
    private id_;
    checkpoint: number[];
    transform: string;
    unit: string;
    from: number;
    to: number;
    constructor();
    protected HandlePostAttributesProcessPostfix_(): void;
    protected HandleElementScopeDestroyed_(scope: IElementScope): void;
    private AddToParent_;
}
export declare function AnimationSceneActElementCompact(): void;

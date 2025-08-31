import { AnimationEaseCallbackType, IAnimationEase, IAnimationEaseParams, IElementScope } from "@benbraide/inlinejs";
import { AnimationBaseEaseElement } from "./ease-base";
export declare class AnimationEaseActorElement extends AnimationBaseEaseElement {
    actor: string | IAnimationEase | AnimationEaseCallbackType;
    constructor();
    IsAnimationActor(): boolean;
    IsAnimationEase(): boolean;
    Handle(params: IAnimationEaseParams): number;
    protected HandleElementScopeDestroyed_(scope: IElementScope): void;
    protected ResolveActor_(): IAnimationEase | AnimationEaseCallbackType | null;
}

import { AnimationActorCallbackType, IAnimationActor, IAnimationActorParams, IElementScope } from "@benbraide/inlinejs";
import { AnimationBaseActorElement } from "./actor-base";
export declare class AnimationPersonalActorElement extends AnimationBaseActorElement {
    protected actor_: IAnimationActor | AnimationActorCallbackType | null;
    constructor();
    Handle(params: IAnimationActorParams): void;
    protected HandleElementScopeDestroyed_(scope: IElementScope): void;
    protected AttributeChanged_(name: string): void;
    protected ShouldRefreshActor_(name: string): boolean;
    protected UpdateActor_(): void;
    protected CreateActor_(): IAnimationActor | AnimationActorCallbackType | null;
}

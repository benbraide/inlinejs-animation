import { IAnimationActor, IAnimationActorParams, IElementScope } from "@benbraide/inlinejs";
import { AnimationBaseElement } from "./base";
export declare class AnimationBaseActorElement extends AnimationBaseElement implements IAnimationActor {
    protected name_: string;
    UpdateNameProperty(value: string): void;
    GetName(): string;
    Handle(params: IAnimationActorParams): void;
    protected HandleElementScopeDestroyed_(scope: IElementScope): void;
}

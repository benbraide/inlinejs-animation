import { IAnimationEase, IAnimationEaseParams, IElementScope } from "@benbraide/inlinejs";
import { AnimationBaseElement } from "./base";
export declare class AnimationBaseEaseElement extends AnimationBaseElement implements IAnimationEase {
    protected name_: string;
    UpdateNameProperty(value: string): void;
    GetName(): string;
    Handle({ fraction }: IAnimationEaseParams): number;
    protected HandleElementScopeDestroyed_(scope: IElementScope): void;
}

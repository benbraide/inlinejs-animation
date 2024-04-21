import { AnimationActorCallbackType, IAnimationActor, IAnimationActorParams } from "@benbraide/inlinejs";
import { AnimationBaseActorElement } from "./actor-base";
export declare class AnimationSharedElement extends AnimationBaseActorElement {
    timeRelative: boolean;
    constructor();
    Handle({ fraction, elapsedFraction, ...rest }: IAnimationActorParams): void;
    protected FindNextActor_(fraction: number): {
        fraction: number;
        actor: IAnimationActor | AnimationActorCallbackType;
    } | null;
    protected FindNextActorAndRelativity_(fraction: number, elapsedFraction: number): {
        timeRelative: any;
        fraction: number;
        elapsedFraction: number;
        actor: IAnimationActor | AnimationActorCallbackType;
    } | null;
}
export declare function AnimationSharedElementCompact(): void;

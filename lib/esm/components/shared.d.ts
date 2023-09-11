import { AnimationActorCallbackType, IAnimationActor, IAnimationActorParams } from "@benbraide/inlinejs";
import { AnimationElement } from "./base";
export declare class AnimationShared extends AnimationElement implements IAnimationActor {
    timeRelative: boolean;
    constructor();
    GetName(): string;
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

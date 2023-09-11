import { IAnimationActor } from "@benbraide/inlinejs";
import { RotateAnimationActorAxisType, RotateAnimatorActorOriginType } from "../actors/rotate/generic";
import { AnimationPersonalActorElement } from "./personal";
export declare class AnimationRotate extends AnimationPersonalActorElement implements IAnimationActor {
    axis: RotateAnimationActorAxisType;
    unit: string;
    from: string;
    to: string;
    factor: number;
    x: RotateAnimatorActorOriginType;
    y: RotateAnimatorActorOriginType;
    constructor();
    GetName(): string;
    protected CreateActor_(): ({ fraction, target, stage }: {
        fraction: any;
        target: any;
        stage: any;
    }) => void;
}
export declare function AnimationRotateElementCompact(): void;

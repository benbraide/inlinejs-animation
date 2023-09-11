import { IAnimationActor } from "@benbraide/inlinejs";
import { ScaleAnimatorActorAxisType, ScaleAnimatorActorOriginType } from "../actors/scale/generic";
import { AnimationPersonalActorElement } from "./personal";
export declare class AnimationScale extends AnimationPersonalActorElement implements IAnimationActor {
    axis: ScaleAnimatorActorAxisType;
    from: string;
    to: string;
    factor: number;
    offset: number;
    x: ScaleAnimatorActorOriginType;
    y: ScaleAnimatorActorOriginType;
    constructor();
    GetName(): string;
    protected CreateActor_(): ({ fraction, target, stage }: {
        fraction: any;
        target: any;
        stage: any;
    }) => void;
}
export declare function AnimationScaleElementCompact(): void;

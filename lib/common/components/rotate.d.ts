import { RotateAnimationActorAxisType, RotateAnimatorActorOriginType } from "../actors/rotate/generic";
import { AnimationPersonalActorElement } from "./personal";
export declare class AnimationRotateElement extends AnimationPersonalActorElement {
    axis: RotateAnimationActorAxisType;
    unit: string;
    from: string;
    to: string;
    factor: number;
    x: RotateAnimatorActorOriginType;
    y: RotateAnimatorActorOriginType;
    constructor();
    protected CreateActor_(): ({ fraction, target, stage }: {
        fraction: any;
        target: any;
        stage: any;
    }) => void;
}
export declare function AnimationRotateElementCompact(): void;

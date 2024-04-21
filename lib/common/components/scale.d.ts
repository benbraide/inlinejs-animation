import { ScaleAnimatorActorAxisType, ScaleAnimatorActorOriginType } from "../actors/scale/generic";
import { AnimationPersonalActorElement } from "./personal";
export declare class AnimationScaleElement extends AnimationPersonalActorElement {
    axis: ScaleAnimatorActorAxisType;
    from: string;
    to: string;
    factor: number;
    offset: number;
    x: ScaleAnimatorActorOriginType;
    y: ScaleAnimatorActorOriginType;
    constructor();
    protected CreateActor_(): ({ fraction, target, stage }: {
        fraction: any;
        target: any;
        stage: any;
    }) => void;
}
export declare function AnimationScaleElementCompact(): void;

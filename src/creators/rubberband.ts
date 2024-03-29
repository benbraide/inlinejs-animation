import { IScaleAnimatorActorOrigin } from "../actors/scale/generic";
import { ApplyRange, ApplyTransform, CreateSceneAnimationCallback } from "../actors/scene/generic";

export interface IRubberbandAnimationCallbackInfo{
    factor?: number;
    multiplier?: number;
    origin?: IScaleAnimatorActorOrigin;
}

export function RubberbandAnimationCreator({ factor = 1.26, multiplier = 0.10, origin }: IRubberbandAnimationCallbackInfo = {}){
    factor = (factor || 1.26);
    multiplier = (multiplier || 0.10);
    
    return CreateSceneAnimationCallback({
        frames: [
            { checkpoint: 0, actor: ({ target, fraction }) => ComputeAndApply(target, fraction, factor, multiplier, null, 1, null, 1) },
            { checkpoint: 1, actor: ({ target, fraction }) => ComputeAndApply(target, fraction, factor, multiplier, -2, 0, -2, 5) },
            { checkpoint: 30, actor: ({ target, fraction }) => ComputeAndApply(target, fraction, factor, multiplier, 0, 5, 5, 0) },
            { checkpoint: 40, actor: ({ target, fraction }) => ComputeAndApply(target, fraction, factor, multiplier, 5, 1, 0, 4) },
            { checkpoint: 50, actor: ({ target, fraction }) => ComputeAndApply(target, fraction, factor, multiplier, 1, 3, 4, 2) },
            { checkpoint: 65, actor: ({ target, fraction }) => ComputeAndApply(target, fraction, factor, multiplier, 3, 2, 2, 3) },
            { checkpoint: 75, actor: ({ target, fraction }) => ComputeAndApply(target, fraction, factor, multiplier, 2, -2, 3, -2) },
            { checkpoint: 100, actor: ({ target, fraction }) => ComputeAndApply(target, fraction, factor, multiplier, null, 1, null, 1) },
        ],
        origin,
    });
}

function ComputeAndApply(target: HTMLElement, fraction: number, factor: number, multiplier: number, fromX: number | null, toX: number, fromY: number | null, toY: number){
    let xValue = ((fromX === null) ? toX : ApplyRange(fraction, SubtractFactor(factor, multiplier, fromX), SubtractFactor(factor, multiplier, toX)));
    let yValue = ((fromY === null) ? toY : ApplyRange(fraction, SubtractFactor(factor, multiplier, fromY), SubtractFactor(factor, multiplier, toY)));

    ApplyTransform(target, 'scale', `${xValue},${yValue}`);
}

function SubtractFactor(factor: number, multiplier: number, value: number){
    return ((0 <= value) ? (factor - (multiplier * value)) : -(value + 1));
}

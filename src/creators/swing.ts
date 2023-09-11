import { IScaleAnimatorActorOrigin } from "../actors/scale/generic";
import { ApplyRangeAndTransform, CreateSceneAnimationCallback } from "../actors/scene/generic";

export interface ISwingAnimationCallbackInfo{
    factor?: number;
    unit?: string;
    origin?: IScaleAnimatorActorOrigin;
}

export function SwingAnimationCreator({ factor = 5, unit = 'deg', origin: { x, y } = { x: 'start', y: 'start' } }: ISwingAnimationCallbackInfo = {}){
    factor = (factor || 5);
    unit = (unit || 'deg');
    
    return CreateSceneAnimationCallback({
        origin: { x: (x || 'start'), y: (y || 'start') },
        frames: [
            { checkpoint: 0, actor: ({ target, fraction }) => ApplyRangeAndTransform(target, 'rotate', fraction, 0, 0, unit) },
            { checkpoint: 1, actor: ({ target, fraction }) => ApplyRangeAndTransform(target, 'rotate', fraction, (factor * 0), (factor * 3), unit) },
            { checkpoint: 20, actor: ({ target, fraction }) => ApplyRangeAndTransform(target, 'rotate', fraction, (factor * 3), (factor * -2), unit) },
            { checkpoint: 40, actor: ({ target, fraction }) => ApplyRangeAndTransform(target, 'rotate', fraction, (factor * -2), (factor * 1), unit) },
            { checkpoint: 60, actor: ({ target, fraction }) => ApplyRangeAndTransform(target, 'rotate', fraction, (factor * 1), (factor * -1), unit) },
            { checkpoint: 80, actor: ({ target, fraction }) => ApplyRangeAndTransform(target, 'rotate', fraction, (factor * -1), (factor * 0), unit) },
            { checkpoint: 100, actor: ({ target, fraction }) => ApplyRangeAndTransform(target, 'rotate', fraction, 0, 0, unit) },
        ],
    });
}

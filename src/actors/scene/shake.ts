import { AddAnimationActor } from "../add";
import { CreateAnimationActorCallback } from "../callback";
import { ApplyRangeAndTransform, CreateSceneAnimationCallback, ISceneAnimatorActorOrigin } from "./generic";

export function CreateShakeSceneAnimationActor(factor = 10, unit = 'px', origin?: ISceneAnimatorActorOrigin){
    factor = (factor || 10);
    return CreateSceneAnimationCallback({
        frames: [
            { checkpoint: 0, actor: ({ target, fraction }) => ApplyRangeAndTransform(target, 'translateX', fraction, 0, 0, unit) },
            { checkpoint: 1, actor: ({ target, fraction }) => ApplyRangeAndTransform(target, 'translateX', fraction, 0, factor, unit) },
            { checkpoint: [10, 30, 50, 70], actor: ({ target, fraction }) => ApplyRangeAndTransform(target, 'translateX', fraction, -factor, factor, unit) },
            { checkpoint: [20, 40, 60, 80], actor: ({ target, fraction }) => ApplyRangeAndTransform(target, 'translateX', fraction, factor, -factor, unit) },
            { checkpoint: 90, actor: ({ target, fraction }) => ApplyRangeAndTransform(target, 'translateX', fraction, -factor, 0, unit) },
            { checkpoint: 100, actor: ({ target, fraction }) => ApplyRangeAndTransform(target, 'translateX', fraction, 0, 0, unit) },
        ],
        origin,
    });
}

export const ShakeAnimationActor = CreateAnimationActorCallback('shake', CreateShakeSceneAnimationActor());

export function ShakeAnimationActorCompact(){
    AddAnimationActor(ShakeAnimationActor);
}

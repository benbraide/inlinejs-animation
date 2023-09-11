import { AddAnimationActor } from "../add";
import { CreateAnimationActorCallback } from "../callback";
import { ApplyRangeAndTransform, CreateSceneAnimationCallback, ISceneAnimatorActorOrigin } from "./generic";

export function CreatePulseSceneAnimationActor(factor = 1.26, origin?: ISceneAnimatorActorOrigin){
    return CreateSceneAnimationCallback({
        frames: [
            { checkpoint: 0, actor: ({ target, fraction }) => ApplyRangeAndTransform(target, 'scale', fraction, 1, 1, '', 2) },
            { checkpoint: 1, actor: ({ target, fraction }) => ApplyRangeAndTransform(target, 'scale', fraction, 1, (factor || 1.26), '', 2) },
            { checkpoint: 50, actor: ({ target, fraction }) => ApplyRangeAndTransform(target, 'scale', fraction, (factor || 1.26), 1, '', 2) },
            { checkpoint: 100, actor: ({ target, fraction }) => ApplyRangeAndTransform(target, 'scale', fraction, 1, 1, '', 2) },
        ],
        origin,
    });
}

export const PulseAnimationActor = CreateAnimationActorCallback('pulse', CreatePulseSceneAnimationActor());

export function PulseAnimationActorCompact(){
    AddAnimationActor(PulseAnimationActor);
}

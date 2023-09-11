import { AddAnimationActor } from "../add";
import { CreateAnimationActorCallback } from "../callback";
import { ApplyRangeAndTransform, CreateSceneAnimationCallback, ISceneAnimatorActorOrigin } from "./generic";

export function CreateHeartbeatSceneAnimationActor(factor = 1.26, origin?: ISceneAnimatorActorOrigin){
    return CreateSceneAnimationCallback({
        frames: [
            { checkpoint: 0, actor: ({ target, fraction }) => ApplyRangeAndTransform(target, 'scale', fraction, 1, 1, '', 2) },
            { checkpoint: [1, 28], actor: ({ target, fraction }) => ApplyRangeAndTransform(target, 'scale', fraction, 1, (factor || 1.26), '', 2) },
            { checkpoint: [14, 42], actor: ({ target, fraction }) => ApplyRangeAndTransform(target, 'scale', fraction, (factor || 1.26), 1, '', 2) },
            { checkpoint: 70, actor: ({ target, fraction }) => ApplyRangeAndTransform(target, 'scale', fraction, 1, 1, '', 2) },
        ],
        origin,
    });
}

export const HeartbeatAnimationActor = CreateAnimationActorCallback('heartbeat', CreateHeartbeatSceneAnimationActor());

export function HeartbeatAnimationActorCompact(){
    AddAnimationActor(HeartbeatAnimationActor);
}

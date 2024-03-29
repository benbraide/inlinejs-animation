"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeartbeatAnimationActorCompact = exports.HeartbeatAnimationActor = exports.CreateHeartbeatSceneAnimationActor = void 0;
const add_1 = require("../add");
const callback_1 = require("../callback");
const generic_1 = require("./generic");
function CreateHeartbeatSceneAnimationActor(factor = 1.26, origin) {
    return (0, generic_1.CreateSceneAnimationCallback)({
        frames: [
            { checkpoint: 0, actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'scale', fraction, 1, 1, '', 2) },
            { checkpoint: [1, 28], actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'scale', fraction, 1, (factor || 1.26), '', 2) },
            { checkpoint: [14, 42], actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'scale', fraction, (factor || 1.26), 1, '', 2) },
            { checkpoint: 70, actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'scale', fraction, 1, 1, '', 2) },
        ],
        origin,
    });
}
exports.CreateHeartbeatSceneAnimationActor = CreateHeartbeatSceneAnimationActor;
exports.HeartbeatAnimationActor = (0, callback_1.CreateAnimationActorCallback)('heartbeat', CreateHeartbeatSceneAnimationActor());
function HeartbeatAnimationActorCompact() {
    (0, add_1.AddAnimationActor)(exports.HeartbeatAnimationActor);
}
exports.HeartbeatAnimationActorCompact = HeartbeatAnimationActorCompact;

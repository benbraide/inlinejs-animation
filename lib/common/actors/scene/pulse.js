"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PulseAnimationActorCompact = exports.PulseAnimationActor = exports.CreatePulseSceneAnimationActor = void 0;
const add_1 = require("../add");
const callback_1 = require("../callback");
const generic_1 = require("./generic");
function CreatePulseSceneAnimationActor(factor = 1.26, origin) {
    return (0, generic_1.CreateSceneAnimationCallback)({
        frames: [
            { checkpoint: 0, actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'scale', fraction, 1, 1, '', 2) },
            { checkpoint: 1, actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'scale', fraction, 1, (factor || 1.26), '', 2) },
            { checkpoint: 50, actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'scale', fraction, (factor || 1.26), 1, '', 2) },
            { checkpoint: 100, actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'scale', fraction, 1, 1, '', 2) },
        ],
        origin,
    });
}
exports.CreatePulseSceneAnimationActor = CreatePulseSceneAnimationActor;
exports.PulseAnimationActor = (0, callback_1.CreateAnimationActorCallback)('pulse', CreatePulseSceneAnimationActor());
function PulseAnimationActorCompact() {
    (0, add_1.AddAnimationActor)(exports.PulseAnimationActor);
}
exports.PulseAnimationActorCompact = PulseAnimationActorCompact;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VibrateAnimationActorCompact = exports.VibrateAnimationActor = exports.CreateVibrateSceneAnimationActor = void 0;
const add_1 = require("../add");
const callback_1 = require("../callback");
const generic_1 = require("./generic");
function CreateVibrateSceneAnimationActor(factor = 4, unit = 'deg', origin) {
    factor = (factor || 4);
    return (0, generic_1.CreateSceneAnimationCallback)({
        frames: [
            { checkpoint: 0, actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'rotateZ', fraction, 0, 0, unit) },
            { checkpoint: 1, actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'rotateZ', fraction, 0, factor, unit) },
            { checkpoint: [10, 30, 50, 70], actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'rotateZ', fraction, -factor, factor, unit) },
            { checkpoint: [20, 40, 60, 80], actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'rotateZ', fraction, factor, -factor, unit) },
            { checkpoint: 90, actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'rotateZ', fraction, -factor, 0, unit) },
            { checkpoint: 100, actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'rotateZ', fraction, 0, 0, unit) },
        ],
        origin,
    });
}
exports.CreateVibrateSceneAnimationActor = CreateVibrateSceneAnimationActor;
exports.VibrateAnimationActor = (0, callback_1.CreateAnimationActorCallback)('vibrate', CreateVibrateSceneAnimationActor());
function VibrateAnimationActorCompact() {
    (0, add_1.AddAnimationActor)(exports.VibrateAnimationActor);
}
exports.VibrateAnimationActorCompact = VibrateAnimationActorCompact;

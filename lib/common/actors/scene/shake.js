"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShakeAnimationActorCompact = exports.ShakeAnimationActor = exports.CreateShakeSceneAnimationActor = void 0;
const add_1 = require("../add");
const callback_1 = require("../callback");
const generic_1 = require("./generic");
function CreateShakeSceneAnimationActor(factor = 10, unit = 'px', origin) {
    factor = (factor || 10);
    return (0, generic_1.CreateSceneAnimationCallback)({
        frames: [
            { checkpoint: 0, actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'translateX', fraction, 0, 0, unit) },
            { checkpoint: 1, actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'translateX', fraction, 0, factor, unit) },
            { checkpoint: [10, 30, 50, 70], actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'translateX', fraction, -factor, factor, unit) },
            { checkpoint: [20, 40, 60, 80], actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'translateX', fraction, factor, -factor, unit) },
            { checkpoint: 90, actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'translateX', fraction, -factor, 0, unit) },
            { checkpoint: 100, actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, 'translateX', fraction, 0, 0, unit) },
        ],
        origin,
    });
}
exports.CreateShakeSceneAnimationActor = CreateShakeSceneAnimationActor;
exports.ShakeAnimationActor = (0, callback_1.CreateAnimationActorCallback)('shake', CreateShakeSceneAnimationActor());
function ShakeAnimationActorCompact() {
    (0, add_1.AddAnimationActor)(exports.ShakeAnimationActor);
}
exports.ShakeAnimationActorCompact = ShakeAnimationActorCompact;

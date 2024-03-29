"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplyRangeAndTransform = exports.FormatValue = exports.ApplyTransform = exports.ApplyRange = exports.CreateSceneAnimationActor = exports.CreateSceneAnimationCallback = void 0;
const callback_1 = require("../callback");
function CreateSceneAnimationCallback({ frames, origin: { x = 'center', y = 'center' } = {} }) {
    x = (x || 'center');
    y = (y || 'center');
    let flatFrames = frames.reduce((prev, { actor, checkpoint }) => {
        return (((Array.isArray(checkpoint) ? prev.push(...checkpoint.map(c => ({ actor, checkpoint: c }))) : prev.push({ actor, checkpoint })) && false) || prev);
    }, new Array()).sort((first, second) => ((first.checkpoint <= second.checkpoint) ? ((first.checkpoint < second.checkpoint) ? -1 : 0) : 1));
    let computeFrameExtent = (index) => ((index < flatFrames.length) ? flatFrames[index].checkpoint : null);
    let optimizedFrames = flatFrames.map(({ actor, checkpoint }, index) => ({ actor, range: { from: checkpoint, to: computeFrameExtent(index + 1) } }));
    let translateOrigin = (value) => ((value !== 'center') ? ((value === 'end') ? '100%' : '0%') : '50%');
    let translatedOrigin = `${translateOrigin(x)} ${translateOrigin(y)}`;
    let checkpointIsInFrame = (frame, checkpoint) => (frame.range.from <= checkpoint && (frame.range.to === null || checkpoint < frame.range.to));
    let currentFrame = null, findFrame = (checkpoint) => optimizedFrames.find(frame => checkpointIsInFrame(frame, checkpoint));
    let callActor = (actor, params) => ((typeof actor === 'function') ? actor(params) : actor.Handle(params));
    return (_a) => {
        var { fraction, target, stage } = _a, rest = __rest(_a, ["fraction", "target", "stage"]);
        if (stage === 'start') {
            currentFrame = null;
            translatedOrigin && (target.style.transformOrigin = translatedOrigin);
        }
        let checkpoint = (fraction * 100);
        if (!currentFrame || !checkpointIsInFrame(currentFrame, checkpoint)) {
            currentFrame = (findFrame(checkpoint) || null);
        }
        if (currentFrame) {
            let rangeDelta = ((currentFrame.range.to || 100) - currentFrame.range.from);
            callActor(currentFrame.actor, Object.assign({ fraction: ((rangeDelta == 0) ? 0 : ((checkpoint - currentFrame.range.from) / rangeDelta)), target, stage }, rest));
        }
    };
}
exports.CreateSceneAnimationCallback = CreateSceneAnimationCallback;
function CreateSceneAnimationActor(_a) {
    var { name } = _a, rest = __rest(_a, ["name"]);
    return (0, callback_1.CreateAnimationActorCallback)(name, CreateSceneAnimationCallback(rest));
}
exports.CreateSceneAnimationActor = CreateSceneAnimationActor;
function ApplyRange(fraction, from, to) {
    return (((to - from) * fraction) + from);
}
exports.ApplyRange = ApplyRange;
function ApplyTransform(target, name, value) {
    target.style.transform = target.style.transform.replace(new RegExp(`[ ]*${name}([XYZ]|3d)?\\(.+?\\)`, 'g'), '');
    target.style.transform += (value ? ` ${name}(${value})` : ` ${name}`);
}
exports.ApplyTransform = ApplyTransform;
function FormatValue(value, count) {
    return ((count && count > 1) ? Array.from({ length: count }).map(i => value).join(',') : value);
}
exports.FormatValue = FormatValue;
function ApplyRangeAndTransform(target, name, fraction, from, to, unit, count) {
    ApplyTransform(target, name, FormatValue(`${ApplyRange(fraction, from, to)}${unit ? unit : ''}`, count));
}
exports.ApplyRangeAndTransform = ApplyRangeAndTransform;

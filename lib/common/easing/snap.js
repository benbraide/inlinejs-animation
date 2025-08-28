"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapAnimationEaseCompact = exports.SnapAnimationEase = exports.CreateSnapEase = void 0;
const add_1 = require("./add");
const callback_1 = require("./callback");
function CreateSnapEase() {
    let snappedValue = 0, endValue = 0;
    return (0, callback_1.CreateAnimationEaseCallback)('snap', ({ fraction, elapsed }) => {
        elapsed == 0 && (snappedValue = fraction <= 0 ? 0 : 1);
        elapsed == 0 && (endValue = fraction <= 0 ? 1 : 0);
        return fraction == endValue ? endValue : snappedValue;
    });
}
exports.CreateSnapEase = CreateSnapEase;
exports.SnapAnimationEase = CreateSnapEase();
function SnapAnimationEaseCompact() {
    (0, add_1.AddAnimationEase)(exports.SnapAnimationEase);
}
exports.SnapAnimationEaseCompact = SnapAnimationEaseCompact;

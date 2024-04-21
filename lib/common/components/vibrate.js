"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationVibrateElementCompact = exports.AnimationVibrateElement = void 0;
const inlinejs_element_1 = require("@benbraide/inlinejs-element");
const vibrate_1 = require("../actors/scene/vibrate");
const scene_base_1 = require("./scene-base");
class AnimationVibrateElement extends scene_base_1.AnimationSceneBaseElement {
    constructor() {
        super();
    }
    CreateActor_() {
        return (0, vibrate_1.CreateVibrateSceneAnimationActor)(this.factor, (this.unit || 'deg'), { x: this.x, y: this.y });
    }
}
exports.AnimationVibrateElement = AnimationVibrateElement;
function AnimationVibrateElementCompact() {
    (0, inlinejs_element_1.RegisterCustomElement)(AnimationVibrateElement, 'animation-vibrate');
}
exports.AnimationVibrateElementCompact = AnimationVibrateElementCompact;

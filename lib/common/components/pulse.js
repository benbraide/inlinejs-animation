"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationPulseElementCompact = exports.AnimationPulse = void 0;
const inlinejs_element_1 = require("@benbraide/inlinejs-element");
const pulse_1 = require("../actors/scene/pulse");
const scene_base_1 = require("./scene-base");
class AnimationPulse extends scene_base_1.AnimationSceneBaseElement {
    constructor() {
        super();
    }
    CreateActor_() {
        return (0, pulse_1.CreatePulseSceneAnimationActor)(this.factor, { x: this.x, y: this.y });
    }
}
exports.AnimationPulse = AnimationPulse;
function AnimationPulseElementCompact() {
    (0, inlinejs_element_1.RegisterCustomElement)(AnimationPulse);
}
exports.AnimationPulseElementCompact = AnimationPulseElementCompact;

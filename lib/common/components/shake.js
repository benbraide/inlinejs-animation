"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationShakeElementCompact = exports.AnimationShake = void 0;
const inlinejs_element_1 = require("@benbraide/inlinejs-element");
const shake_1 = require("../actors/scene/shake");
const scene_base_1 = require("./scene-base");
class AnimationShake extends scene_base_1.AnimationSceneBaseElement {
    constructor() {
        super();
    }
    CreateActor_() {
        return (0, shake_1.CreateShakeSceneAnimationActor)(this.factor, (this.unit || 'px'), { x: this.x, y: this.y });
    }
}
exports.AnimationShake = AnimationShake;
function AnimationShakeElementCompact() {
    (0, inlinejs_element_1.RegisterCustomElement)(AnimationShake);
}
exports.AnimationShakeElementCompact = AnimationShakeElementCompact;

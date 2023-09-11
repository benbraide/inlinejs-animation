"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationSwingElementCompact = exports.AnimationSwing = void 0;
const inlinejs_element_1 = require("@benbraide/inlinejs-element");
const scene_base_1 = require("./scene-base");
const swing_1 = require("../creators/swing");
class AnimationSwing extends scene_base_1.AnimationSceneBaseElement {
    constructor() {
        super();
        this.x = this.y = 'start';
    }
    CreateActor_() {
        return (0, swing_1.SwingAnimationCreator)({
            factor: this.factor,
            unit: this.unit,
            origin: { x: this.x, y: this.y },
        });
    }
}
exports.AnimationSwing = AnimationSwing;
function AnimationSwingElementCompact() {
    (0, inlinejs_element_1.RegisterCustomElement)(AnimationSwing);
}
exports.AnimationSwingElementCompact = AnimationSwingElementCompact;

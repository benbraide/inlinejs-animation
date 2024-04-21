"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationBaseElement = void 0;
const inlinejs_element_1 = require("@benbraide/inlinejs-element");
class AnimationBaseElement extends inlinejs_element_1.CustomElement {
    constructor() {
        super({ isTemplate: true });
    }
    IsAnimationActor() {
        return true;
    }
    IsAnimationEase() {
        return false;
    }
    DisableTemplate_() {
        this.options_.isTemplate = false;
        this.options_.isHidden = true;
    }
}
exports.AnimationBaseElement = AnimationBaseElement;

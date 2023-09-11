"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationElement = void 0;
const inlinejs_element_1 = require("@benbraide/inlinejs-element");
class AnimationElement extends inlinejs_element_1.CustomElement {
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
exports.AnimationElement = AnimationElement;

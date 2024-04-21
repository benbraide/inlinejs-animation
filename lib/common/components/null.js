"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationNullElementCompact = exports.AnimationNullElement = void 0;
const inlinejs_element_1 = require("@benbraide/inlinejs-element");
const actor_base_1 = require("./actor-base");
class AnimationNullElement extends actor_base_1.AnimationBaseActorElement {
    constructor() {
        super();
    }
    Handle() { }
}
exports.AnimationNullElement = AnimationNullElement;
function AnimationNullElementCompact() {
    (0, inlinejs_element_1.RegisterCustomElement)(AnimationNullElement, 'animation-null');
}
exports.AnimationNullElementCompact = AnimationNullElementCompact;

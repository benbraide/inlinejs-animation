"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationNullElementCompact = exports.AnimationNull = void 0;
const inlinejs_element_1 = require("@benbraide/inlinejs-element");
const base_1 = require("./base");
class AnimationNull extends base_1.AnimationElement {
    constructor() {
        super();
    }
    GetName() {
        return '{AnimationNullElement}';
    }
    Handle() { }
}
exports.AnimationNull = AnimationNull;
function AnimationNullElementCompact() {
    (0, inlinejs_element_1.RegisterCustomElement)(AnimationNull);
}
exports.AnimationNullElementCompact = AnimationNullElementCompact;

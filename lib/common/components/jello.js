"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationJelloElementCompact = exports.AnimationJelloElement = void 0;
const inlinejs_element_1 = require("@benbraide/inlinejs-element");
const scene_base_1 = require("./scene-base");
const jello_1 = require("../creators/jello");
class AnimationJelloElement extends scene_base_1.AnimationSceneBaseElement {
    constructor() {
        super();
        this.divisor = 0;
    }
    CreateActor_() {
        return (0, jello_1.JelloAnimationCreator)({
            factor: this.factor,
            divisor: this.divisor,
            unit: this.unit,
            origin: { x: this.x, y: this.y },
        });
    }
}
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'number' })
], AnimationJelloElement.prototype, "divisor", void 0);
exports.AnimationJelloElement = AnimationJelloElement;
function AnimationJelloElementCompact() {
    (0, inlinejs_element_1.RegisterCustomElement)(AnimationJelloElement, 'animation-jello');
}
exports.AnimationJelloElementCompact = AnimationJelloElementCompact;

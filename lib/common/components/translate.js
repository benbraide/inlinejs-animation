"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationTranslateElementCompact = exports.AnimationTranslateElement = void 0;
const inlinejs_element_1 = require("@benbraide/inlinejs-element");
const generic_1 = require("../actors/translate/generic");
const personal_1 = require("./personal");
class AnimationTranslateElement extends personal_1.AnimationPersonalActorElement {
    constructor() {
        super();
        this.axis = 'both';
        this.unit = ['deg'];
        this.from = new Array();
        this.to = new Array();
        this.factor = [0];
        this.offset = [0];
    }
    CreateActor_() {
        return (0, generic_1.CreateTranslateAnimationCallback)({
            axis: this.axis,
            unit: (0, generic_1.ComputeField)(this.unit),
            from: (0, generic_1.ComputeField)(this.from),
            to: (0, generic_1.ComputeField)(this.to),
            factor: (0, generic_1.ComputeField)(this.factor),
            offset: (0, generic_1.ComputeField)(this.offset),
        });
    }
}
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'string' })
], AnimationTranslateElement.prototype, "axis", void 0);
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'array', delimiter: ' ' })
], AnimationTranslateElement.prototype, "unit", void 0);
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'array:number', delimiter: ' ' })
], AnimationTranslateElement.prototype, "from", void 0);
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'array:number', delimiter: ' ' })
], AnimationTranslateElement.prototype, "to", void 0);
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'array:number', delimiter: ' ' })
], AnimationTranslateElement.prototype, "factor", void 0);
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'array:number', delimiter: ' ' })
], AnimationTranslateElement.prototype, "offset", void 0);
exports.AnimationTranslateElement = AnimationTranslateElement;
function AnimationTranslateElementCompact() {
    (0, inlinejs_element_1.RegisterCustomElement)(AnimationTranslateElement, 'animation-translate');
}
exports.AnimationTranslateElementCompact = AnimationTranslateElementCompact;

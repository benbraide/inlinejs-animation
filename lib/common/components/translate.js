"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationTranslateElementCompact = exports.AnimationTranslate = void 0;
const inlinejs_element_1 = require("@benbraide/inlinejs-element");
const generic_1 = require("../actors/translate/generic");
const personal_1 = require("./personal");
class AnimationTranslate extends personal_1.AnimationPersonalActorElement {
    constructor() {
        super();
        this.axis = 'both';
        this.unit = ['deg'];
        this.from = new Array();
        this.to = new Array();
        this.factor = [0];
        this.offset = [0];
    }
    GetName() {
        return '{AnimationTranslateElement}';
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
], AnimationTranslate.prototype, "axis", void 0);
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'array', delimiter: ' ' })
], AnimationTranslate.prototype, "unit", void 0);
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'array:number', delimiter: ' ' })
], AnimationTranslate.prototype, "from", void 0);
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'array:number', delimiter: ' ' })
], AnimationTranslate.prototype, "to", void 0);
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'array:number', delimiter: ' ' })
], AnimationTranslate.prototype, "factor", void 0);
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'array:number', delimiter: ' ' })
], AnimationTranslate.prototype, "offset", void 0);
exports.AnimationTranslate = AnimationTranslate;
function AnimationTranslateElementCompact() {
    (0, inlinejs_element_1.RegisterCustomElement)(AnimationTranslate);
}
exports.AnimationTranslateElementCompact = AnimationTranslateElementCompact;

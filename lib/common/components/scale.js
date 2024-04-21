"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationScaleElementCompact = exports.AnimationScaleElement = void 0;
const inlinejs_element_1 = require("@benbraide/inlinejs-element");
const generic_1 = require("../actors/scale/generic");
const personal_1 = require("./personal");
class AnimationScaleElement extends personal_1.AnimationPersonalActorElement {
    constructor() {
        super();
        this.axis = 'both';
        this.from = '';
        this.to = '';
        this.factor = 0;
        this.offset = 0;
        this.x = 'center';
        this.y = 'center';
    }
    CreateActor_() {
        return (0, generic_1.CreateScaleAnimationCallback)({
            axis: this.axis,
            origin: { x: (this.x || 'center'), y: (this.y || 'center') },
            from: (this.from ? (parseFloat(this.from) || 0) : undefined),
            to: (this.to ? (parseFloat(this.to) || 0) : undefined),
            factor: this.factor,
            offset: this.offset,
        });
    }
}
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'string' })
], AnimationScaleElement.prototype, "axis", void 0);
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'string' })
], AnimationScaleElement.prototype, "from", void 0);
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'string' })
], AnimationScaleElement.prototype, "to", void 0);
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'number' })
], AnimationScaleElement.prototype, "factor", void 0);
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'number' })
], AnimationScaleElement.prototype, "offset", void 0);
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'string', spread: 'origin' })
], AnimationScaleElement.prototype, "x", void 0);
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'string', spread: 'origin' })
], AnimationScaleElement.prototype, "y", void 0);
exports.AnimationScaleElement = AnimationScaleElement;
function AnimationScaleElementCompact() {
    (0, inlinejs_element_1.RegisterCustomElement)(AnimationScaleElement, 'animation-scale');
}
exports.AnimationScaleElementCompact = AnimationScaleElementCompact;

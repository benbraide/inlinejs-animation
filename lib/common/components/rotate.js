"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationRotateElementCompact = exports.AnimationRotateElement = void 0;
const generic_1 = require("../actors/rotate/generic");
const personal_1 = require("./personal");
const inlinejs_element_1 = require("@benbraide/inlinejs-element");
class AnimationRotateElement extends personal_1.AnimationPersonalActorElement {
    constructor() {
        super();
        this.axis = 'z';
        this.unit = 'deg';
        this.from = '';
        this.to = '';
        this.factor = 0;
        this.x = 'center';
        this.y = 'center';
    }
    CreateActor_() {
        return (0, generic_1.CreateRotateAnimationCallback)({
            axis: this.axis,
            unit: this.unit,
            origin: { x: (this.x || 'center'), y: (this.y || 'center') },
            from: (this.from ? (parseFloat(this.from) || 0) : undefined),
            to: (this.to ? (parseFloat(this.to) || 0) : undefined),
            factor: this.factor,
        });
    }
}
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'string' })
], AnimationRotateElement.prototype, "axis", void 0);
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'string' })
], AnimationRotateElement.prototype, "unit", void 0);
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'string' })
], AnimationRotateElement.prototype, "from", void 0);
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'string' })
], AnimationRotateElement.prototype, "to", void 0);
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'number' })
], AnimationRotateElement.prototype, "factor", void 0);
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'string', spread: 'origin' })
], AnimationRotateElement.prototype, "x", void 0);
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'string', spread: 'origin' })
], AnimationRotateElement.prototype, "y", void 0);
exports.AnimationRotateElement = AnimationRotateElement;
function AnimationRotateElementCompact() {
    (0, inlinejs_element_1.RegisterCustomElement)(AnimationRotateElement, 'animation-rotate');
}
exports.AnimationRotateElementCompact = AnimationRotateElementCompact;

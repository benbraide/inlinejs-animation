"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationSliceElementCompact = exports.AnimationSliceElement = void 0;
const inlinejs_element_1 = require("@benbraide/inlinejs-element");
const actor_1 = require("./actor");
class AnimationSliceElement extends actor_1.AnimationActorElement {
    constructor() {
        super();
        this.from = 0;
        this.to = 1;
        this.timeRelative = false;
        this.DisableTemplate_();
    }
    HandleFraction(fraction) {
        if ((this.from || 0) <= fraction && (this.to || 1) >= fraction) {
            return ((fraction - (this.from || 0)) / ((this.to || 1) - (this.from || 0)));
        }
        return null;
    }
    IsTimeRelative() {
        return this.timeRelative;
    }
}
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'number' })
], AnimationSliceElement.prototype, "from", void 0);
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'number' })
], AnimationSliceElement.prototype, "to", void 0);
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'boolean' })
], AnimationSliceElement.prototype, "timeRelative", void 0);
exports.AnimationSliceElement = AnimationSliceElement;
function AnimationSliceElementCompact() {
    (0, inlinejs_element_1.RegisterCustomElement)(AnimationSliceElement, 'animation-slice');
}
exports.AnimationSliceElementCompact = AnimationSliceElementCompact;

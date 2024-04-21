"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationOpacityElementCompact = exports.AnimationOpacityElement = void 0;
const inlinejs_element_1 = require("@benbraide/inlinejs-element");
const personal_1 = require("./personal");
class AnimationOpacityElement extends personal_1.AnimationPersonalActorElement {
    constructor() {
        super();
        this.from = 0;
        this.to = 1;
    }
    CreateActor_() {
        let from = (this.from || 0), to = (this.to || 1), factor = (to - from);
        return ({ fraction, target, stage }) => {
            target.style.opacity = (from + (factor * fraction)).toString();
            (stage === 'end') && target.style.removeProperty('opacity');
        };
    }
}
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'number' })
], AnimationOpacityElement.prototype, "from", void 0);
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'number' })
], AnimationOpacityElement.prototype, "to", void 0);
exports.AnimationOpacityElement = AnimationOpacityElement;
function AnimationOpacityElementCompact() {
    (0, inlinejs_element_1.RegisterCustomElement)(AnimationOpacityElement, 'animation-opacity');
}
exports.AnimationOpacityElementCompact = AnimationOpacityElementCompact;

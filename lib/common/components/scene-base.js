"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationSceneBaseElement = void 0;
const inlinejs_element_1 = require("@benbraide/inlinejs-element");
const personal_1 = require("./personal");
class AnimationSceneBaseElement extends personal_1.AnimationPersonalActorElement {
    constructor() {
        super();
        this.factor = 0;
        this.unit = '';
        this.x = 'center';
        this.y = 'center';
    }
    GetName() {
        return '{AnimationSceneBaseElement}';
    }
}
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'number' })
], AnimationSceneBaseElement.prototype, "factor", void 0);
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'string' })
], AnimationSceneBaseElement.prototype, "unit", void 0);
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'string', spread: 'origin' })
], AnimationSceneBaseElement.prototype, "x", void 0);
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'string', spread: 'origin' })
], AnimationSceneBaseElement.prototype, "y", void 0);
exports.AnimationSceneBaseElement = AnimationSceneBaseElement;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationSceneElementCompact = exports.AnimationSceneElement = void 0;
const inlinejs_element_1 = require("@benbraide/inlinejs-element");
const generic_1 = require("../actors/scene/generic");
const personal_1 = require("./personal");
class AnimationSceneElement extends personal_1.AnimationPersonalActorElement {
    constructor() {
        super();
        this.acts_ = new Array();
        this.idOffset_ = -1;
        this.x = 'center';
        this.y = 'center';
        this.DisableTemplate_();
    }
    AddSceneAct(act) {
        const id = `scene-act-${++this.idOffset_}`;
        this.acts_.push({ id, act });
        return id;
    }
    RemoveSceneAct(target) {
        if (typeof target !== 'string') {
            this.acts_ = this.acts_.filter(info => (info.act === target));
        }
        else { // Remove by id
            this.acts_ = this.acts_.filter(info => (info.id !== target));
        }
    }
    CreateActor_() {
        return (0, generic_1.CreateSceneAnimationCallback)({
            frames: this.acts_.map(info => info.act),
            origin: { x: (this.x || 'center'), y: (this.y || 'center') },
        });
    }
}
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'string', spread: 'origin' })
], AnimationSceneElement.prototype, "x", void 0);
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'string', spread: 'origin' })
], AnimationSceneElement.prototype, "y", void 0);
exports.AnimationSceneElement = AnimationSceneElement;
function AnimationSceneElementCompact() {
    (0, inlinejs_element_1.RegisterCustomElement)(AnimationSceneElement, 'animation-scene');
}
exports.AnimationSceneElementCompact = AnimationSceneElementCompact;

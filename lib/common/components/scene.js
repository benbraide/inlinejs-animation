"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationSceneElementCompact = exports.AnimationScene = void 0;
const inlinejs_element_1 = require("@benbraide/inlinejs-element");
const generic_1 = require("../actors/scene/generic");
const personal_1 = require("./personal");
class AnimationScene extends personal_1.AnimationPersonalActorElement {
    constructor() {
        super();
        this.acts_ = new Array();
        this.idOffset_ = -1;
        this.x = 'center';
        this.y = 'center';
        this.DisableTemplate_();
    }
    GetName() {
        return '{AnimationSceneElement}';
    }
    AddSceneAct(act) {
        const id = `scene-act-${++this.idOffset_}`;
        this.acts_.push({ id, act });
        return id;
    }
    RemoveSceneAct(id) {
        this.acts_ = this.acts_.filter(info => (info.id !== id));
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
], AnimationScene.prototype, "x", void 0);
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'string', spread: 'origin' })
], AnimationScene.prototype, "y", void 0);
exports.AnimationScene = AnimationScene;
function AnimationSceneElementCompact() {
    (0, inlinejs_element_1.RegisterCustomElement)(AnimationScene);
}
exports.AnimationSceneElementCompact = AnimationSceneElementCompact;

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Property, RegisterCustomElement } from "@benbraide/inlinejs-element";
import { CreateSceneAnimationCallback } from "../actors/scene/generic";
import { AnimationPersonalActorElement } from "./personal";
export class AnimationSceneElement extends AnimationPersonalActorElement {
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
        return CreateSceneAnimationCallback({
            frames: this.acts_.map(info => info.act),
            origin: { x: (this.x || 'center'), y: (this.y || 'center') },
        });
    }
}
__decorate([
    Property({ type: 'string', spread: 'origin' })
], AnimationSceneElement.prototype, "x", void 0);
__decorate([
    Property({ type: 'string', spread: 'origin' })
], AnimationSceneElement.prototype, "y", void 0);
export function AnimationSceneElementCompact() {
    RegisterCustomElement(AnimationSceneElement, 'animation-scene');
}

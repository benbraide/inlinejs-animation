var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Property, RegisterCustomElement } from "@benbraide/inlinejs-element";
import { CreateSceneAnimationCallback } from "../actors/scene/generic";
import { AnimationPersonalActorElement } from "./personal";
export class AnimationScene extends AnimationPersonalActorElement {
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
        return CreateSceneAnimationCallback({
            frames: this.acts_.map(info => info.act),
            origin: { x: (this.x || 'center'), y: (this.y || 'center') },
        });
    }
}
__decorate([
    Property({ type: 'string', spread: 'origin' })
], AnimationScene.prototype, "x", void 0);
__decorate([
    Property({ type: 'string', spread: 'origin' })
], AnimationScene.prototype, "y", void 0);
export function AnimationSceneElementCompact() {
    RegisterCustomElement(AnimationScene);
}

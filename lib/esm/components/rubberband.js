var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Property, RegisterCustomElement } from "@benbraide/inlinejs-element";
import { AnimationSceneBaseElement } from "./scene-base";
import { RubberbandAnimationCreator } from "../creators/rubberband";
export class AnimationRubberbandElement extends AnimationSceneBaseElement {
    constructor() {
        super();
        this.multiplier = 0;
    }
    CreateActor_() {
        return RubberbandAnimationCreator({
            factor: this.factor,
            multiplier: this.multiplier,
            origin: { x: this.x, y: this.y },
        });
    }
}
__decorate([
    Property({ type: 'number' })
], AnimationRubberbandElement.prototype, "multiplier", void 0);
export function AnimationRubberbandElementCompact() {
    RegisterCustomElement(AnimationRubberbandElement, 'animation-rubberband');
}

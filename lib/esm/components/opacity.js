var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Property, RegisterCustomElement } from "@benbraide/inlinejs-element";
import { AnimationPersonalActorElement } from "./personal";
export class AnimationOpacity extends AnimationPersonalActorElement {
    constructor() {
        super();
        this.from = 0;
        this.to = 1;
    }
    GetName() {
        return '{AnimationOpacityElement}';
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
    Property({ type: 'number' })
], AnimationOpacity.prototype, "from", void 0);
__decorate([
    Property({ type: 'number' })
], AnimationOpacity.prototype, "to", void 0);
export function AnimationOpacityElementCompact() {
    RegisterCustomElement(AnimationOpacity);
}

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CreateRotateAnimationCallback } from "../actors/rotate/generic";
import { AnimationPersonalActorElement } from "./personal";
import { Property, RegisterCustomElement } from "@benbraide/inlinejs-element";
export class AnimationRotateElement extends AnimationPersonalActorElement {
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
        return CreateRotateAnimationCallback({
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
    Property({ type: 'string' })
], AnimationRotateElement.prototype, "axis", void 0);
__decorate([
    Property({ type: 'string' })
], AnimationRotateElement.prototype, "unit", void 0);
__decorate([
    Property({ type: 'string' })
], AnimationRotateElement.prototype, "from", void 0);
__decorate([
    Property({ type: 'string' })
], AnimationRotateElement.prototype, "to", void 0);
__decorate([
    Property({ type: 'number' })
], AnimationRotateElement.prototype, "factor", void 0);
__decorate([
    Property({ type: 'string', spread: 'origin' })
], AnimationRotateElement.prototype, "x", void 0);
__decorate([
    Property({ type: 'string', spread: 'origin' })
], AnimationRotateElement.prototype, "y", void 0);
export function AnimationRotateElementCompact() {
    RegisterCustomElement(AnimationRotateElement, 'animation-rotate');
}

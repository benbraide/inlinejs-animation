var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Property, RegisterCustomElement } from "@benbraide/inlinejs-element";
import { CreateScaleAnimationCallback } from "../actors/scale/generic";
import { AnimationPersonalActorElement } from "./personal";
export class AnimationScaleElement extends AnimationPersonalActorElement {
    constructor() {
        super();
        this.axis = 'both';
        this.from = '';
        this.to = '';
        this.factor = 0;
        this.offset = 0;
        this.x = 'center';
        this.y = 'center';
    }
    CreateActor_() {
        return CreateScaleAnimationCallback({
            axis: this.axis,
            origin: { x: (this.x || 'center'), y: (this.y || 'center') },
            from: (this.from ? (parseFloat(this.from) || 0) : undefined),
            to: (this.to ? (parseFloat(this.to) || 0) : undefined),
            factor: this.factor,
            offset: this.offset,
        });
    }
}
__decorate([
    Property({ type: 'string' })
], AnimationScaleElement.prototype, "axis", void 0);
__decorate([
    Property({ type: 'string' })
], AnimationScaleElement.prototype, "from", void 0);
__decorate([
    Property({ type: 'string' })
], AnimationScaleElement.prototype, "to", void 0);
__decorate([
    Property({ type: 'number' })
], AnimationScaleElement.prototype, "factor", void 0);
__decorate([
    Property({ type: 'number' })
], AnimationScaleElement.prototype, "offset", void 0);
__decorate([
    Property({ type: 'string', spread: 'origin' })
], AnimationScaleElement.prototype, "x", void 0);
__decorate([
    Property({ type: 'string', spread: 'origin' })
], AnimationScaleElement.prototype, "y", void 0);
export function AnimationScaleElementCompact() {
    RegisterCustomElement(AnimationScaleElement, 'animation-scale');
}

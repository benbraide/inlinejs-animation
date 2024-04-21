var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Property, RegisterCustomElement } from "@benbraide/inlinejs-element";
import { ComputeField, CreateTranslateAnimationCallback } from "../actors/translate/generic";
import { AnimationPersonalActorElement } from "./personal";
export class AnimationTranslateElement extends AnimationPersonalActorElement {
    constructor() {
        super();
        this.axis = 'both';
        this.unit = ['deg'];
        this.from = new Array();
        this.to = new Array();
        this.factor = [0];
        this.offset = [0];
    }
    CreateActor_() {
        return CreateTranslateAnimationCallback({
            axis: this.axis,
            unit: ComputeField(this.unit),
            from: ComputeField(this.from),
            to: ComputeField(this.to),
            factor: ComputeField(this.factor),
            offset: ComputeField(this.offset),
        });
    }
}
__decorate([
    Property({ type: 'string' })
], AnimationTranslateElement.prototype, "axis", void 0);
__decorate([
    Property({ type: 'array', delimiter: ' ' })
], AnimationTranslateElement.prototype, "unit", void 0);
__decorate([
    Property({ type: 'array:number', delimiter: ' ' })
], AnimationTranslateElement.prototype, "from", void 0);
__decorate([
    Property({ type: 'array:number', delimiter: ' ' })
], AnimationTranslateElement.prototype, "to", void 0);
__decorate([
    Property({ type: 'array:number', delimiter: ' ' })
], AnimationTranslateElement.prototype, "factor", void 0);
__decorate([
    Property({ type: 'array:number', delimiter: ' ' })
], AnimationTranslateElement.prototype, "offset", void 0);
export function AnimationTranslateElementCompact() {
    RegisterCustomElement(AnimationTranslateElement, 'animation-translate');
}

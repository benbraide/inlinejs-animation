var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Property, RegisterCustomElement } from "@benbraide/inlinejs-element";
import { BezierAnimationEaseCreator } from "../creators/bezier";
import { AnimationBaseEaseElement } from "./ease-base";
export class EaseBezierElement extends AnimationBaseEaseElement {
    constructor() {
        super();
        this.actor_ = null;
        this.p1 = 0;
        this.p2 = 0;
        this.p3 = 0;
        this.p4 = 0;
    }
    Handle(params) {
        this.actor_ = (this.actor_ || BezierAnimationEaseCreator([this.p1, this.p2, this.p3, this.p4]));
        return this.actor_(params);
    }
    AttributeChanged_(name) {
        this.instancePropertyNames_.includes(name) && (this.actor_ = null);
        super.AttributeChanged_(name);
    }
}
__decorate([
    Property({ type: 'number', spread: 'points' })
], EaseBezierElement.prototype, "p1", void 0);
__decorate([
    Property({ type: 'number', spread: 'points' })
], EaseBezierElement.prototype, "p2", void 0);
__decorate([
    Property({ type: 'number', spread: 'points' })
], EaseBezierElement.prototype, "p3", void 0);
__decorate([
    Property({ type: 'number', spread: 'points' })
], EaseBezierElement.prototype, "p4", void 0);
export function EaseBezierElementCompact() {
    RegisterCustomElement(EaseBezierElement, 'ease-bezier');
}

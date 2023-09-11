var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { EvaluateLater } from "@benbraide/inlinejs";
import { Property, RegisterCustomElement } from "@benbraide/inlinejs-element";
import { AnimationEaseActorElement } from "./ease-actor";
import { ResolveEaseName } from "../utilities/resolve";
export class Ease extends AnimationEaseActorElement {
    constructor() {
        super();
        this.name_ = '';
        this.expression = '';
        this.DisableTemplate_();
    }
    UpdateNameProperty(value) {
        this.name_ = ResolveEaseName(this, this.name_, value);
    }
    GetName() {
        return (this.name_ || '{AnimationEaseElement}');
    }
    Handle(params) {
        if (this.actor) {
            return super.Handle(params);
        }
        if (!this.expression) {
            return 0;
        }
        const evaluated = EvaluateLater({
            componentId: this.componentId_,
            contextElement: this,
            expression: this.expression,
            disableFunctionCall: false,
        })(undefined, [], params);
        return ((typeof evaluated === 'number') ? evaluated : 0);
    }
}
__decorate([
    Property({ type: 'string' })
], Ease.prototype, "UpdateNameProperty", null);
__decorate([
    Property({ type: 'string' })
], Ease.prototype, "expression", void 0);
export function EaseElementCompact() {
    RegisterCustomElement(Ease);
}

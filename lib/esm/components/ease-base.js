var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { GetGlobal } from "@benbraide/inlinejs";
import { Property } from "@benbraide/inlinejs-element";
import { AnimationBaseElement } from "./base";
import { ResolveEaseName } from "../utilities/resolve";
export class AnimationBaseEaseElement extends AnimationBaseElement {
    constructor() {
        super(...arguments);
        this.name_ = '';
    }
    UpdateNameProperty(value) {
        this.name_ = ResolveEaseName(this, this.name_, value);
    }
    GetName() {
        return (this.name_ || '{AnimationBaseEaseElement}');
    }
    Handle({ fraction }) {
        return fraction;
    }
    HandleElementScopeDestroyed_(scope) {
        var _a;
        super.HandleElementScopeDestroyed_(scope);
        this.name_ && ((_a = GetGlobal().GetConcept('animation')) === null || _a === void 0 ? void 0 : _a.GetEaseCollection().Remove(this.name_));
    }
}
__decorate([
    Property({ type: 'string' })
], AnimationBaseEaseElement.prototype, "UpdateNameProperty", null);

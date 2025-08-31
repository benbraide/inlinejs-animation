var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { GetGlobal } from "@benbraide/inlinejs";
import { Property } from "@benbraide/inlinejs-element";
import { AnimationBaseElement } from "./base";
import { ResolveActorName } from "../utilities/resolve";
export class AnimationBaseActorElement extends AnimationBaseElement {
    constructor() {
        super(...arguments);
        this.name_ = '';
    }
    UpdateNameProperty(value) {
        this.name_ = ResolveActorName(this, this.name_, value);
    }
    GetName() {
        return (this.name_ || '{AnimationBaseActorElement}');
    }
    Handle(params) { }
    HandleElementScopeDestroyed_(scope) {
        var _a;
        super.HandleElementScopeDestroyed_(scope);
        this.name_ && ((_a = GetGlobal().GetConcept('animation')) === null || _a === void 0 ? void 0 : _a.GetActorCollection().Remove(this.name_));
    }
}
__decorate([
    Property({ type: 'string' })
], AnimationBaseActorElement.prototype, "UpdateNameProperty", null);

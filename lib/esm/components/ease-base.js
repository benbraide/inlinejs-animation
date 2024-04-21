var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
    HandleElementScopeCreated_(_a, postAttributesCallback) {
        var { scope } = _a, rest = __rest(_a, ["scope"]);
        super.HandleElementScopeCreated_(Object.assign({ scope }, rest), postAttributesCallback);
        scope.AddUninitCallback(() => { var _a; return this.name_ && ((_a = GetGlobal().GetConcept('animation')) === null || _a === void 0 ? void 0 : _a.GetEaseCollection().Remove(this.name_)); });
    }
}
__decorate([
    Property({ type: 'string' })
], AnimationBaseEaseElement.prototype, "UpdateNameProperty", null);

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationBaseActorElement = void 0;
const inlinejs_1 = require("@benbraide/inlinejs");
const inlinejs_element_1 = require("@benbraide/inlinejs-element");
const base_1 = require("./base");
const resolve_1 = require("../utilities/resolve");
class AnimationBaseActorElement extends base_1.AnimationBaseElement {
    constructor() {
        super(...arguments);
        this.name_ = '';
    }
    UpdateNameProperty(value) {
        this.name_ = (0, resolve_1.ResolveActorName)(this, this.name_, value);
    }
    GetName() {
        return (this.name_ || '{AnimationBaseActorElement}');
    }
    Handle(params) { }
    HandleElementScopeDestroyed_(scope) {
        var _a;
        super.HandleElementScopeDestroyed_(scope);
        this.name_ && ((_a = (0, inlinejs_1.GetGlobal)().GetConcept('animation')) === null || _a === void 0 ? void 0 : _a.GetActorCollection().Remove(this.name_));
    }
}
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'string' })
], AnimationBaseActorElement.prototype, "UpdateNameProperty", null);
exports.AnimationBaseActorElement = AnimationBaseActorElement;

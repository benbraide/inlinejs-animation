"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationElementCompact = exports.AnimationElement = void 0;
const inlinejs_1 = require("@benbraide/inlinejs");
const inlinejs_element_1 = require("@benbraide/inlinejs-element");
const actor_1 = require("./actor");
const resolve_1 = require("../utilities/resolve");
class AnimationElement extends actor_1.AnimationActorElement {
    constructor() {
        super();
        this.expression = '';
        this.ease = '';
        this.DisableTemplate_();
    }
    Handle(params) {
        if (this.expression) {
            (0, inlinejs_1.EvaluateLater)({
                componentId: this.componentId_,
                contextElement: this,
                expression: this.expression,
                disableFunctionCall: false,
            })(undefined, [], params);
        }
        else {
            this.Handle_(params, (0, resolve_1.ResolveEase)(this, this.ease), this.IsTimeRelative());
        }
    }
    HandleFraction(fraction) {
        const actor = this.ResolveActor_();
        return ((actor && 'HandleFraction' in actor && typeof actor['HandleFraction'] === 'function') ? actor['HandleFraction'](fraction) : null);
    }
    IsTimeRelative() {
        const actor = this.ResolveActor_();
        return (actor && 'IsTimeRelative' in actor && typeof actor['IsTimeRelative'] === 'function' && actor['IsTimeRelative']());
    }
}
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'string' })
], AnimationElement.prototype, "expression", void 0);
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'string', checkStoredObject: true })
], AnimationElement.prototype, "ease", void 0);
exports.AnimationElement = AnimationElement;
function AnimationElementCompact() {
    (0, inlinejs_element_1.RegisterCustomElement)(AnimationElement, 'animation');
}
exports.AnimationElementCompact = AnimationElementCompact;

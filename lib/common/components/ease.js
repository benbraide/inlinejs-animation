"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EaseElementCompact = exports.EaseElement = void 0;
const inlinejs_1 = require("@benbraide/inlinejs");
const inlinejs_element_1 = require("@benbraide/inlinejs-element");
const ease_actor_1 = require("./ease-actor");
class EaseElement extends ease_actor_1.AnimationEaseActorElement {
    constructor() {
        super();
        this.expression = '';
        this.DisableTemplate_();
    }
    Handle(params) {
        if (this.actor) {
            return super.Handle(params);
        }
        if (!this.expression) {
            return 0;
        }
        const evaluated = (0, inlinejs_1.EvaluateLater)({
            componentId: this.componentId_,
            contextElement: this,
            expression: this.expression,
            disableFunctionCall: false,
        })(undefined, [], params);
        return ((typeof evaluated === 'number') ? evaluated : 0);
    }
}
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'string' })
], EaseElement.prototype, "expression", void 0);
exports.EaseElement = EaseElement;
function EaseElementCompact() {
    (0, inlinejs_element_1.RegisterCustomElement)(EaseElement, 'ease');
}
exports.EaseElementCompact = EaseElementCompact;

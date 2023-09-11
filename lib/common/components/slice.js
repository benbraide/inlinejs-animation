"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationSliceElementCompact = exports.AnimationSlice = void 0;
const inlinejs_element_1 = require("@benbraide/inlinejs-element");
const actor_1 = require("./actor");
class AnimationSlice extends actor_1.AnimationActorElement {
    constructor() {
        super();
        this.from = 0;
        this.to = 1;
        this.timeRelative = false;
        this.DisableTemplate_();
    }
    GetName() {
        return '{AnimationSliceElement}';
    }
    HandleFraction(fraction) {
        if ((this.from || 0) <= fraction && (this.to || 1) >= fraction) {
            return ((fraction - (this.from || 0)) / ((this.to || 1) - (this.from || 0)));
        }
        return null;
    }
    IsTimeRelative() {
        return this.timeRelative;
    }
    HandleElementScopeCreated_(_a, postAttributesCallback) {
        var { scope } = _a, rest = __rest(_a, ["scope"]);
        super.HandleElementScopeCreated_(Object.assign({ scope }, rest), () => {
            this.AddToParent_();
            postAttributesCallback && postAttributesCallback();
        });
    }
    AddToParent_() {
        if (this.parentElement && ('AddSlice' in this.parentElement) && typeof this.parentElement['AddSlice'] === 'function') {
            this.parentElement['AddSlice']({
                actor: this,
                slice: { from: this.from, to: this.to },
            });
        }
    }
}
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'number' })
], AnimationSlice.prototype, "from", void 0);
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'number' })
], AnimationSlice.prototype, "to", void 0);
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'boolean' })
], AnimationSlice.prototype, "timeRelative", void 0);
exports.AnimationSlice = AnimationSlice;
function AnimationSliceElementCompact() {
    (0, inlinejs_element_1.RegisterCustomElement)(AnimationSlice);
}
exports.AnimationSliceElementCompact = AnimationSliceElementCompact;

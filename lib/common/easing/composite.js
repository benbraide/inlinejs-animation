"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompositeAnimationEase = void 0;
class CompositeAnimationEase {
    constructor(eases) {
        this.eases_ = ((eases && Array.isArray(eases)) ? eases : []);
    }
    GetName() {
        return '[CompositeAnimationEase]';
    }
    Handle(params) {
        const callEase = (ease) => ((typeof ease === 'function') ? ease(params) : ease.Handle(params));
        return this.eases_.reduce((a, b) => (a * callEase(b)), 1);
    }
    AddEase(ease) {
        this.eases_.push(ease);
    }
    RemoveEase(ease) {
        this.eases_ = this.eases_.filter(a => (a !== ease));
    }
    RemoveAll() {
        this.eases_ = [];
    }
}
exports.CompositeAnimationEase = CompositeAnimationEase;

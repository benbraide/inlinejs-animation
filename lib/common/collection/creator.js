"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationCreatorCollection = void 0;
class AnimationCreatorCollection {
    constructor() {
        this.list_ = {};
    }
    Add(name, creator) {
        this.list_[name] = creator;
    }
    Remove(target) {
        if (typeof target !== 'string') {
            Object.entries(this.list_).forEach(([name, creator]) => {
                (creator === target) && delete this.list_[name];
            });
        }
        else { // Remove by name
            delete this.list_[target];
        }
    }
    Find(name) {
        return (this.list_.hasOwnProperty(name) ? this.list_[name] : null);
    }
}
exports.AnimationCreatorCollection = AnimationCreatorCollection;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcurrentCompositeAnimationActor = void 0;
const inlinejs_1 = require("@benbraide/inlinejs");
class ConcurrentCompositeAnimationActor {
    constructor(actors) {
        this.actors_ = ((actors && Array.isArray(actors)) ? actors : []);
    }
    GetName() {
        return '[ConcurrentCompositeAnimationActor]';
    }
    Handle(params) {
        this.actors_.forEach(actor => (0, inlinejs_1.JournalTry)(() => ((typeof actor === 'function') ? actor(params) : actor.Handle(params))));
    }
    AddActor(actor) {
        this.actors_.push(actor);
    }
    RemoveActor(actor) {
        this.actors_ = this.actors_.filter(a => (a !== actor));
    }
}
exports.ConcurrentCompositeAnimationActor = ConcurrentCompositeAnimationActor;

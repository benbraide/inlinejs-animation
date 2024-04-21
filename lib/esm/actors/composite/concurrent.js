import { JournalTry } from "@benbraide/inlinejs";
export class ConcurrentCompositeAnimationActor {
    constructor(actors) {
        this.actors_ = ((actors && Array.isArray(actors)) ? actors : []);
    }
    GetName() {
        return '[ConcurrentCompositeAnimationActor]';
    }
    Handle(params) {
        this.actors_.forEach(actor => JournalTry(() => ((typeof actor === 'function') ? actor(params) : actor.Handle(params))));
    }
    AddActor(actor) {
        this.actors_.push(actor);
    }
    RemoveActor(actor) {
        this.actors_ = this.actors_.filter(a => (a !== actor));
    }
    RemoveAll() {
        this.actors_ = [];
    }
}

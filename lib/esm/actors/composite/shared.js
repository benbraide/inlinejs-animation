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
import { JournalTry } from "@benbraide/inlinejs";
export class SharedCompositeAnimationActor {
    constructor(actors, timeRelative_) {
        this.timeRelative_ = timeRelative_;
        this.actors_ = ((actors && Array.isArray(actors)) ? actors : []);
    }
    GetName() {
        return '[SharedCompositeAnimationActor]';
    }
    Handle(_a) {
        var { fraction, elapsedFraction } = _a, rest = __rest(_a, ["fraction", "elapsedFraction"]);
        const info = this.FindNextActor_(this.timeRelative_ ? elapsedFraction : fraction);
        if (!info) {
            return;
        }
        let params;
        if (this.timeRelative_) {
            params = Object.assign({ fraction, elapsedFraction: ((elapsedFraction - (info.slice.from || 0)) / ((info.slice.to || 1) - (info.slice.from || 0))) }, rest);
        }
        else {
            params = Object.assign({ elapsedFraction, fraction: ((fraction - (info.slice.from || 0)) / ((info.slice.to || 1) - (info.slice.from || 0))) }, rest);
        }
        JournalTry(() => ((typeof info.actor === 'function') ? info.actor(params) : info.actor.Handle(params)));
    }
    AddActor(actor) {
        this.actors_.push(actor);
    }
    RemoveActor(actor) {
        this.actors_ = this.actors_.filter(a => (a.actor !== actor));
    }
    RemoveAll() {
        this.actors_ = [];
    }
    FindNextActor_(fraction) {
        return this.actors_.find(info => ((info.slice.from || 0) <= fraction && (info.slice.to || 1) >= fraction));
    }
}

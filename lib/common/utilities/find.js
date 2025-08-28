"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirst = void 0;
const inlinejs_1 = require("@benbraide/inlinejs");
function FindFirst(name) {
    const concept = (0, inlinejs_1.GetGlobal)().GetConcept('animation');
    if (!concept) {
        return null;
    }
    const actor = concept.GetActorCollection().Find(name);
    if (actor) {
        return [actor, null, null];
    }
    const ease = concept.GetEaseCollection().Find(name);
    if (ease) {
        return [null, ease, null];
    }
    const numeric = concept.GetNamedNumericCollection().Find(name);
    if (numeric !== null) {
        return [null, null, numeric];
    }
    return null;
}
exports.FindFirst = FindFirst;

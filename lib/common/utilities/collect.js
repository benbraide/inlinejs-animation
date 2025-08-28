"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectAnimationEasings = exports.CollectAnimationActors = void 0;
const inlinejs_1 = require("@benbraide/inlinejs");
const concurrent_1 = require("../actors/composite/concurrent");
const composite_1 = require("../easing/composite");
function CollectAnimationActors(collection) {
    const concept = (0, inlinejs_1.GetGlobal)().GetConcept('animation');
    const validActors = collection.map(actor => ((typeof actor === 'string') ? concept === null || concept === void 0 ? void 0 : concept.GetActorCollection().Find(actor) : actor)).filter(actor => !!actor);
    return new concurrent_1.ConcurrentCompositeAnimationActor(validActors);
}
exports.CollectAnimationActors = CollectAnimationActors;
function CollectAnimationEasings(collection) {
    const concept = (0, inlinejs_1.GetGlobal)().GetConcept('animation');
    const validEases = collection.map(ease => ((typeof ease === 'string') ? concept === null || concept === void 0 ? void 0 : concept.GetEaseCollection().Find(ease) : ease)).filter(ease => !!ease);
    return new composite_1.CompositeAnimationEase(validEases);
}
exports.CollectAnimationEasings = CollectAnimationEasings;

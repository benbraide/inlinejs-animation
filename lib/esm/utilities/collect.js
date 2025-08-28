import { GetGlobal } from "@benbraide/inlinejs";
import { ConcurrentCompositeAnimationActor } from "../actors/composite/concurrent";
import { CompositeAnimationEase } from "../easing/composite";
export function CollectAnimationActors(collection) {
    const concept = GetGlobal().GetConcept('animation');
    const validActors = collection.map(actor => ((typeof actor === 'string') ? concept === null || concept === void 0 ? void 0 : concept.GetActorCollection().Find(actor) : actor)).filter(actor => !!actor);
    return new ConcurrentCompositeAnimationActor(validActors);
}
export function CollectAnimationEasings(collection) {
    const concept = GetGlobal().GetConcept('animation');
    const validEases = collection.map(ease => ((typeof ease === 'string') ? concept === null || concept === void 0 ? void 0 : concept.GetEaseCollection().Find(ease) : ease)).filter(ease => !!ease);
    return new CompositeAnimationEase(validEases);
}

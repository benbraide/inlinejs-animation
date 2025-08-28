import { AnimationActorCallbackType, AnimationEaseCallbackType, GetGlobal, IAnimationActor, IAnimationConcept, IAnimationEase } from "@benbraide/inlinejs";
import { ConcurrentCompositeAnimationActor } from "../actors/composite/concurrent";
import { CompositeAnimationEase } from "../easing/composite";

export function CollectAnimationActors(collection: Array<string | IAnimationActor | AnimationActorCallbackType>): IAnimationActor{
    const concept = GetGlobal().GetConcept<IAnimationConcept>('animation');
    const validActors = collection.map(actor => ((typeof actor === 'string') ? concept?.GetActorCollection().Find(actor) : actor)).filter(actor => !!actor);
    return new ConcurrentCompositeAnimationActor(<Array<IAnimationActor | AnimationActorCallbackType>>validActors);
}

export function CollectAnimationEasings(collection: Array<string | IAnimationEase | AnimationEaseCallbackType>): IAnimationEase{
    const concept = GetGlobal().GetConcept<IAnimationConcept>('animation');
    const validEases = collection.map(ease => ((typeof ease === 'string') ? concept?.GetEaseCollection().Find(ease) : ease)).filter(ease => !!ease);
    return new CompositeAnimationEase(<Array<IAnimationEase | AnimationEaseCallbackType>>validEases);
}

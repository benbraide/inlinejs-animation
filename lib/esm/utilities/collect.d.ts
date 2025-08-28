import { AnimationActorCallbackType, AnimationEaseCallbackType, IAnimationActor, IAnimationEase } from "@benbraide/inlinejs";
export declare function CollectAnimationActors(collection: Array<string | IAnimationActor | AnimationActorCallbackType>): IAnimationActor;
export declare function CollectAnimationEasings(collection: Array<string | IAnimationEase | AnimationEaseCallbackType>): IAnimationEase;

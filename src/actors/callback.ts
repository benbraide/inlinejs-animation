import { AnimationActorCallbackType, IAnimationActorCallbackDetails } from "@benbraide/inlinejs";

export function CreateAnimationActorCallback(name: string, callback: AnimationActorCallbackType): IAnimationActorCallbackDetails{
    return { name, callback };
}

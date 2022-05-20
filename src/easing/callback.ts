import { AnimationEaseCallbackType, IAnimationEaseCallbackDetails } from "@benbraide/inlinejs";

export function CreateAnimationEaseCallback(name: string, callback: AnimationEaseCallbackType): IAnimationEaseCallbackDetails{
    return { name, callback };
}

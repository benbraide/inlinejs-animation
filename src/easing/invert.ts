import { AnimationEaseCallbackType, IAnimationEase, IAnimationEaseCallbackDetails, IAnimationEaseParams } from "@benbraide/inlinejs";
import { CallAnimationEase } from "./call";

export function InvertAnimationEase(handler: IAnimationEase | IAnimationEaseCallbackDetails | AnimationEaseCallbackType, params: IAnimationEaseParams){
    return (1 - CallAnimationEase(handler, params));
}

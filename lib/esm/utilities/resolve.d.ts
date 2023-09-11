import { AnimationActorCallbackType, AnimationEaseCallbackType, IAnimationActor, IAnimationEase } from "@benbraide/inlinejs";
import { CustomElement } from "@benbraide/inlinejs-element";
export declare function ResolveActorName(el: IAnimationActor, name: string, value: string): string;
export declare function ResolveEaseName(el: IAnimationEase, name: string, value: string): string;
export declare function ResolveActor(el: CustomElement, value: string | IAnimationActor | AnimationActorCallbackType): IAnimationActor | AnimationActorCallbackType | null;
export declare function ResolveEase(el: CustomElement, value: string | IAnimationEase | AnimationEaseCallbackType): IAnimationEase | AnimationEaseCallbackType | null;
export declare function ResolveNumeric(value: string): number;

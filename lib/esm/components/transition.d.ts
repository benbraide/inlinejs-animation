import { AnimationActorCallbackType, AnimationAllowedType, AnimationEaseCallbackType, IAnimationActor, IAnimationEase, IAnimationTransition } from "@benbraide/inlinejs";
import { AnimationElement } from "./base";
export declare class Transition extends AnimationElement {
    protected data_: IAnimationTransition | null;
    protected extend_: Transition | HTMLElement | null;
    protected resetCallback_: () => void;
    protected resetCallbacks_: (() => void)[];
    extend: string | Transition;
    actor: string | IAnimationActor | AnimationActorCallbackType;
    ease: string | IAnimationEase | AnimationEaseCallbackType;
    duration: string;
    mode: AnimationAllowedType;
    repeats: string;
    delay: string;
    constructor();
    IsAnimationActor(): boolean;
    GetData(): IAnimationTransition;
    protected AttributeChanged_(name: string): void;
    protected BuildData_(): IAnimationTransition;
    protected AddResetCallback_(callback: () => void): void;
    protected RemoveResetCallback_(callback: () => void): void;
    protected GetExtendedData_(): IAnimationTransition;
    protected GetDefaultData_(): IAnimationTransition;
}
export declare function TransitionElementCompact(): void;

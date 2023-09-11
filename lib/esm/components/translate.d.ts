import { IAnimationActor } from "@benbraide/inlinejs";
import { TranslateAnimationActorAxisType } from "../actors/translate/generic";
import { AnimationPersonalActorElement } from "./personal";
export declare class AnimationTranslate extends AnimationPersonalActorElement implements IAnimationActor {
    axis: TranslateAnimationActorAxisType;
    unit: string[];
    from: number[];
    to: number[];
    factor: number[];
    offset: number[];
    constructor();
    GetName(): string;
    protected CreateActor_(): ({ fraction, target }: {
        fraction: any;
        target: any;
    }) => void;
}
export declare function AnimationTranslateElementCompact(): void;

import { TranslateAnimationActorAxisType } from "../actors/translate/generic";
import { AnimationPersonalActorElement } from "./personal";
export declare class AnimationTranslateElement extends AnimationPersonalActorElement {
    axis: TranslateAnimationActorAxisType;
    unit: string[];
    from: number[];
    to: number[];
    factor: number[];
    offset: number[];
    constructor();
    protected CreateActor_(): ({ fraction, target }: {
        fraction: any;
        target: any;
    }) => void;
}
export declare function AnimationTranslateElementCompact(): void;

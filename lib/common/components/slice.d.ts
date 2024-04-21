import { AnimationActorElement } from "./actor";
export declare class AnimationSliceElement extends AnimationActorElement {
    from: number;
    to: number;
    timeRelative: boolean;
    constructor();
    HandleFraction(fraction: number): number | null;
    IsTimeRelative(): boolean;
}
export declare function AnimationSliceElementCompact(): void;

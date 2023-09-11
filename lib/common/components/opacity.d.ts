import { IAnimationActor } from "@benbraide/inlinejs";
import { AnimationPersonalActorElement } from "./personal";
export declare class AnimationOpacity extends AnimationPersonalActorElement implements IAnimationActor {
    from: number;
    to: number;
    constructor();
    GetName(): string;
    protected CreateActor_(): ({ fraction, target, stage }: {
        fraction: any;
        target: any;
        stage: any;
    }) => void;
}
export declare function AnimationOpacityElementCompact(): void;

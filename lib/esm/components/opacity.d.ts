import { AnimationPersonalActorElement } from "./personal";
export declare class AnimationOpacityElement extends AnimationPersonalActorElement {
    from: number;
    to: number;
    constructor();
    protected CreateActor_(): ({ fraction, target, stage }: {
        fraction: any;
        target: any;
        stage: any;
    }) => void;
}
export declare function AnimationOpacityElementCompact(): void;

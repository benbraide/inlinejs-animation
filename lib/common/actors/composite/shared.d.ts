import { IAnimationActor, IAnimationActorParams, AnimationActorCallbackType } from "@benbraide/inlinejs";
export interface ISharedActorSlice {
    actor: IAnimationActor | AnimationActorCallbackType;
    slice: {
        from?: number;
        to?: number;
    };
}
export declare class SharedCompositeAnimationActor implements IAnimationActor {
    private timeRelative_?;
    private actors_;
    constructor(actors: Array<ISharedActorSlice>, timeRelative_?: boolean | undefined);
    GetName(): string;
    Handle({ fraction, elapsedFraction, ...rest }: IAnimationActorParams): void;
    AddActor(actor: ISharedActorSlice): void;
    RemoveActor(actor: IAnimationActor | AnimationActorCallbackType): void;
    private FindNextActor_;
}

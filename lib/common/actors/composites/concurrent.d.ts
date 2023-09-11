import { IAnimationActor, IAnimationActorParams, AnimationActorCallbackType } from "@benbraide/inlinejs";
export declare class ConcurrentCompositeAnimationActor implements IAnimationActor {
    private actors_;
    constructor(actors: Array<IAnimationActor | AnimationActorCallbackType>);
    GetName(): string;
    Handle(params: IAnimationActorParams): void;
    AddActor(actor: IAnimationActor | AnimationActorCallbackType): void;
    RemoveActor(actor: IAnimationActor | AnimationActorCallbackType): void;
}

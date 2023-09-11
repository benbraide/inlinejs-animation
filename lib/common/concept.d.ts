import { IAnimationActorCollection, IAnimationConcept, IAnimationCreatorCollection, IAnimationEaseCollection } from "@benbraide/inlinejs";
import { AnimationNameNumericCollection } from "./collection/numeric";
export declare class AnimationConcept implements IAnimationConcept {
    private easeCollection_;
    private actorCollection_;
    private creatorCollection_;
    private nameNumericCollection_;
    constructor();
    GetEaseCollection(): IAnimationEaseCollection;
    GetActorCollection(): IAnimationActorCollection;
    GetCreatorCollection(): IAnimationCreatorCollection;
    GetNamedNumericCollection(): AnimationNameNumericCollection;
}

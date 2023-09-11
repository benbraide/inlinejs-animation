import { IAnimationActorCollection, IAnimationConcept, IAnimationCreatorCollection, IAnimationEaseCollection } from "@benbraide/inlinejs";

import { AnimationActorCollection } from "./collection/actor";
import { AnimationCreatorCollection } from "./collection/creator";
import { AnimationEaseCollection } from "./collection/ease";
import { AnimationNameNumericCollection } from "./collection/numeric";
import { NamedAnimationDurations } from "./utilities/named-numeric";

export class AnimationConcept implements IAnimationConcept{
    private easeCollection_ = new AnimationEaseCollection();
    private actorCollection_ = new AnimationActorCollection();
    private creatorCollection_ = new AnimationCreatorCollection();
    private nameNumericCollection_ = new AnimationNameNumericCollection();

    constructor(){
        Object.entries(NamedAnimationDurations).forEach(([key, value]) => this.nameNumericCollection_.Add(key, value));
    }
    
    public GetEaseCollection(): IAnimationEaseCollection{
        return this.easeCollection_;
    }

    public GetActorCollection(): IAnimationActorCollection{
        return this.actorCollection_;
    }

    public GetCreatorCollection(): IAnimationCreatorCollection{
        return this.creatorCollection_;
    }

    public GetNamedNumericCollection(): AnimationNameNumericCollection{
        return this.nameNumericCollection_;
    }
}

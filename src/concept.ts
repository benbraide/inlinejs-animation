import { IAnimationActorCollection, IAnimationConcept, IAnimationCreatorCollection, IAnimationEaseCollection } from "@benbraide/inlinejs";

import { AnimationActorCollection } from "./collection/actor";
import { AnimationCreatorCollection } from "./collection/creator";
import { AnimationEaseCollection } from "./collection/ease";

export class AnimationConcept implements IAnimationConcept{
    private easeCollection_ = new AnimationEaseCollection();
    private actorCollection_ = new AnimationActorCollection();
    private creatorCollection_ = new AnimationCreatorCollection();
    
    public GetEaseCollection(): IAnimationEaseCollection{
        return this.easeCollection_;
    }

    public GetActorCollection(): IAnimationActorCollection{
        return this.actorCollection_;
    }

    public GetCreatorCollection(): IAnimationCreatorCollection{
        return this.creatorCollection_;
    }
}

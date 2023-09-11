import { AnimationActorCollection } from "./collection/actor";
import { AnimationCreatorCollection } from "./collection/creator";
import { AnimationEaseCollection } from "./collection/ease";
import { AnimationNameNumericCollection } from "./collection/numeric";
import { NamedAnimationDurations } from "./utilities/named-numeric";
export class AnimationConcept {
    constructor() {
        this.easeCollection_ = new AnimationEaseCollection();
        this.actorCollection_ = new AnimationActorCollection();
        this.creatorCollection_ = new AnimationCreatorCollection();
        this.nameNumericCollection_ = new AnimationNameNumericCollection();
        Object.entries(NamedAnimationDurations).forEach(([key, value]) => this.nameNumericCollection_.Add(key, value));
    }
    GetEaseCollection() {
        return this.easeCollection_;
    }
    GetActorCollection() {
        return this.actorCollection_;
    }
    GetCreatorCollection() {
        return this.creatorCollection_;
    }
    GetNamedNumericCollection() {
        return this.nameNumericCollection_;
    }
}

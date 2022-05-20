import { AnimationActorCollection } from "./collection/actor";
import { AnimationCreatorCollection } from "./collection/creator";
import { AnimationEaseCollection } from "./collection/ease";
export class AnimationConcept {
    constructor() {
        this.easeCollection_ = new AnimationEaseCollection();
        this.actorCollection_ = new AnimationActorCollection();
        this.creatorCollection_ = new AnimationCreatorCollection();
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
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationConcept = void 0;
const actor_1 = require("./collection/actor");
const creator_1 = require("./collection/creator");
const ease_1 = require("./collection/ease");
const numeric_1 = require("./collection/numeric");
const named_numeric_1 = require("./utilities/named-numeric");
class AnimationConcept {
    constructor() {
        this.easeCollection_ = new ease_1.AnimationEaseCollection();
        this.actorCollection_ = new actor_1.AnimationActorCollection();
        this.creatorCollection_ = new creator_1.AnimationCreatorCollection();
        this.nameNumericCollection_ = new numeric_1.AnimationNameNumericCollection();
        Object.entries(named_numeric_1.NamedAnimationDurations).forEach(([key, value]) => this.nameNumericCollection_.Add(key, value));
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
exports.AnimationConcept = AnimationConcept;

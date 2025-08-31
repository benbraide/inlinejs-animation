import { AnimationBaseActorElement } from "./actor-base";
export class AnimationPersonalActorElement extends AnimationBaseActorElement {
    constructor() {
        super();
        this.actor_ = null;
    }
    Handle(params) {
        this.UpdateActor_();
        this.actor_ && ((typeof this.actor_ === 'function') ? this.actor_(params) : this.actor_.Handle(params));
    }
    HandleElementScopeDestroyed_(scope) {
        super.HandleElementScopeDestroyed_(scope);
        this.actor_ = null;
    }
    AttributeChanged_(name) {
        this.ShouldRefreshActor_(name) && (this.actor_ = null);
        super.AttributeChanged_(name);
    }
    ShouldRefreshActor_(name) {
        return this.instancePropertyNames_.includes(name);
    }
    UpdateActor_() {
        this.actor_ = (this.actor_ || this.CreateActor_());
    }
    CreateActor_() {
        return null;
    }
}

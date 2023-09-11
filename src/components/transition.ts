import {
    AnimationActorCallbackType,
    AnimationAllowedType,
    AnimationEaseCallbackType,
    DefaultTransitionDelay,
    DefaultTransitionDuration,
    DefaultTransitionRepeats,
    GetGlobal,
    IAnimationActor,
    IAnimationConcept,
    IAnimationEase,
    IAnimationTransition,
    JournalTry
} from "@benbraide/inlinejs";

import { Property, RegisterCustomElement } from "@benbraide/inlinejs-element";
import { FindTransitionData } from "../utilities/find-data";
import { AnimationElement } from "./base";
import { ResolveActor, ResolveEase, ResolveNumeric } from "../utilities/resolve";

export class Transition extends AnimationElement{
    protected data_: IAnimationTransition | null = null;
    protected extend_: Transition | HTMLElement | null = null;
    
    protected resetCallback_: () => void;
    protected resetCallbacks_ = new Array<() => void>();

    @Property({ type: 'string', checkStoredObject: true })
    public extend: string | Transition = '';

    @Property({ type: 'string', checkStoredObject: true })
    public actor: string | IAnimationActor | AnimationActorCallbackType = '';

    @Property({ type: 'string', checkStoredObject: true })
    public ease: string | IAnimationEase | AnimationEaseCallbackType = '';

    @Property({ type: 'string' })
    public duration = '';

    @Property({ type: 'string' })
    public mode: AnimationAllowedType = 'both';

    @Property({ type: 'string' })
    public repeats = '';

    @Property({ type: 'string' })
    public delay = '';
    
    public constructor(){
        super();
        this.resetCallback_ = () => (this.data_ = null);
    }

    public IsAnimationActor(){
        return false;
    }

    public GetData(): IAnimationTransition{
        return (this.data_ || (this.data_ = this.BuildData_()));
    }

    protected AttributeChanged_(name: string){
        if (this.instancePropertyNames_.includes(name)){
            this.data_ = null;
            this.resetCallbacks_.forEach(callback => JournalTry(callback));
            this.extend_ && (this.extend_ instanceof Transition) && this.extend_.RemoveResetCallback_(this.resetCallback_);
            this.extend_ = ((name === 'extend') ? null : this.extend_);
        }
        
        super.AttributeChanged_(name);
    }

    protected BuildData_(): IAnimationTransition{
        let extendData = this.GetExtendedData_();
        return {
            actor: (ResolveActor(this, this.actor) || extendData.actor),
            ease: (ResolveEase(this, this.ease) || extendData.ease),
            duration: (ResolveNumeric(this.duration) || extendData.duration),
            repeats: (ResolveNumeric(this.repeats) || extendData.repeats),
            delay: (ResolveNumeric(this.delay) || extendData.delay),
            allowed: (this.mode || extendData.allowed),
        };
    }
    
    protected AddResetCallback_(callback: () => void){
        this.resetCallbacks_.push(callback);
    }

    protected RemoveResetCallback_(callback: () => void){
        this.resetCallbacks_ = this.resetCallbacks_.filter(cb => (cb !== callback));
    }

    protected GetExtendedData_(): IAnimationTransition{
        if (!this.extend_){
            if (this.extend && typeof this.extend === 'string'){
                const el = document.getElementById(this.extend);
                el && el instanceof Transition && (this.extend_ = el);
            }
            else if (this.extend && this.extend instanceof HTMLElement){
                this.extend_ = this.extend;
            }

            this.extend_ && (this.extend_ instanceof Transition) && this.extend_.AddResetCallback_(this.resetCallback_);
        }
        
        if (!this.extend_){
            return this.GetDefaultData_();
        }

        if (this.extend_ instanceof Transition){
            return this.extend_.GetData();
        }

        return (FindTransitionData({
            componentId: this.componentId_,
            contextElement: this.extend_,
        }) || this.GetDefaultData_());
    }

    protected GetDefaultData_(): IAnimationTransition{
        return {
            actor: (GetGlobal().GetConcept<IAnimationConcept>('animation')?.GetActorCollection().Find('default') || null),
            ease: (GetGlobal().GetConcept<IAnimationConcept>('animation')?.GetEaseCollection().Find('default') || null),
            duration: DefaultTransitionDuration,
            repeats: DefaultTransitionRepeats,
            delay: DefaultTransitionDelay,
            allowed: 'both',
        };
    }
}

export function TransitionElementCompact(){
    RegisterCustomElement(Transition);
}

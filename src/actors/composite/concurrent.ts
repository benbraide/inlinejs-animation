import { IAnimationActor, IAnimationActorParams, AnimationActorCallbackType, JournalTry } from "@benbraide/inlinejs";

export class ConcurrentCompositeAnimationActor implements IAnimationActor{
    private actors_: Array<IAnimationActor | AnimationActorCallbackType>;

    public constructor(actors: Array<IAnimationActor | AnimationActorCallbackType>){
        this.actors_ = ((actors && Array.isArray(actors)) ? actors : []);
    }
    
    public GetName(){
        return '[ConcurrentCompositeAnimationActor]';
    }

    public Handle(params: IAnimationActorParams){
        this.actors_.forEach(actor => JournalTry(() => ((typeof actor === 'function') ? actor(params) : actor.Handle(params))));
    }

    public AddActor(actor: IAnimationActor | AnimationActorCallbackType){
        this.actors_.push(actor);
    }

    public RemoveActor(actor: IAnimationActor | AnimationActorCallbackType){
        this.actors_ = this.actors_.filter(a => (a !== actor));
    }
}

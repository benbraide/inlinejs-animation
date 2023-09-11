import { IAnimationActor, IAnimationActorParams, AnimationActorCallbackType, JournalTry } from "@benbraide/inlinejs";

export interface ISharedActorSlice{
    actor: IAnimationActor | AnimationActorCallbackType;
    slice: {
        from?: number;
        to?: number;
    };
}

export class SharedCompositeAnimationActor implements IAnimationActor{
    private actors_: Array<ISharedActorSlice>;

    public constructor(actors: Array<ISharedActorSlice>, private timeRelative_?: boolean){
        this.actors_ = ((actors && Array.isArray(actors)) ? actors : []);
    }
    
    public GetName(){
        return '[SharedCompositeAnimationActor]';
    }

    public Handle({ fraction, elapsedFraction, ...rest }: IAnimationActorParams){
        const info = this.FindNextActor_(this.timeRelative_ ? elapsedFraction : fraction);
        if (!info){
            return;
        }

        let params: IAnimationActorParams;
        if (this.timeRelative_){
            params = {
                fraction,
                elapsedFraction: ((elapsedFraction - (info.slice.from || 0)) / ((info.slice.to || 1) - (info.slice.from || 0))),
                ...rest,
            };
        }
        else{
            params = {
                elapsedFraction,
                fraction: ((fraction - (info.slice.from || 0)) / ((info.slice.to || 1) - (info.slice.from || 0))),
                ...rest,
            };
        }
        
        JournalTry(() => ((typeof info!.actor === 'function') ? info!.actor(params) : info!.actor.Handle(params)));
    }

    public AddActor(actor: ISharedActorSlice){
        this.actors_.push(actor);
    }

    public RemoveActor(actor: IAnimationActor | AnimationActorCallbackType){
        this.actors_ = this.actors_.filter(a => (a.actor !== actor));
    }

    private FindNextActor_(fraction: number){
        return this.actors_.find(info => ((info.slice.from || 0) <= fraction && (info.slice.to || 1) >= fraction));
    }
}

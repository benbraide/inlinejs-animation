import { AnimationActorCallbackType, IAnimationActor, IAnimationActorParams, JournalTry } from "@benbraide/inlinejs";
import { Property, RegisterCustomElement } from "@benbraide/inlinejs-element";
import { AnimationBaseActorElement } from "./actor-base";

export class AnimationSharedElement extends AnimationBaseActorElement{
    @Property({ type: 'boolean' })
    public timeRelative = false;
    
    public constructor(){
        super();
        this.DisableTemplate_();
    }

    public Handle({ fraction, elapsedFraction, ...rest }: IAnimationActorParams){
        let actor: IAnimationActor | AnimationActorCallbackType | null = null, timeRelative = this.timeRelative;
        if (!timeRelative){
            const info = this.FindNextActorAndRelativity_(fraction, elapsedFraction);
            if (info){
                actor = info.actor;
                timeRelative = info.timeRelative;
                fraction = info.fraction;
                elapsedFraction = info.elapsedFraction;
            }
        }
        else{
            const info = this.FindNextActor_(elapsedFraction);
            if (info){
                actor = info.actor;
                fraction = info.fraction;
            }
        }
        
        if (actor){
            const params: IAnimationActorParams = { fraction, elapsedFraction, ...rest };
            JournalTry(() => (actor && ((typeof actor === 'function') ? actor(params) : actor.Handle(params))));
        }
    }

    protected FindNextActor_(fraction: number){
        for (let child of this.children){
            if (!('HandleFraction' in child) && typeof (child as any)['HandleFraction'] !== 'function'){
                continue;
            }
            
            const result: number | null = (child as any)['HandleFraction'](fraction);
            if (result !== null){
                return {
                    fraction: result,
                    actor: (child as unknown as IAnimationActor | AnimationActorCallbackType),
                };
            }
        }
        return null;
    }

    protected FindNextActorAndRelativity_(fraction: number, elapsedFraction: number){
        for (let child of this.children){
            const timeRelative = ('IsTimeRelative' in child && typeof (child as any)['IsTimeRelative'] === 'function' && (child as any)['IsTimeRelative']());
            if (!('HandleFraction' in child) && typeof child['HandleFraction'] !== 'function'){
                continue;
            }
            
            const result: number | null = (child as any)['HandleFraction'](timeRelative ? elapsedFraction : fraction);
            if (result !== null){
                return {
                    timeRelative,
                    fraction: (timeRelative ? fraction : result),
                    elapsedFraction: (timeRelative ? result : elapsedFraction),
                    actor: (child as unknown as IAnimationActor | AnimationActorCallbackType),
                };
            }
        }
        return null;
    }
}

export function AnimationSharedElementCompact(){
    RegisterCustomElement(AnimationSharedElement, 'animation-shared');
}

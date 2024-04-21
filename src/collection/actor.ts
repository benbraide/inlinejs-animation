import { AnimationActorCallbackType, IAnimationActor, IAnimationActorCollection, IAnimationActorParams } from "@benbraide/inlinejs";

export class AnimationActorCollection implements IAnimationActorCollection{
    private handlers_: Record<string, IAnimationActor | AnimationActorCallbackType> = {};
    
    public Add(handler: IAnimationActor | AnimationActorCallbackType, name?: string){
        if (typeof handler !== 'function'){
            this.handlers_[handler.GetName()] = handler;
        }
        else if (name){
            this.handlers_[name] = handler;
        }
    }

    public Remove(target: string | IAnimationActor | AnimationActorCallbackType){
        if (typeof target !== 'string'){
            Object.entries(this.handlers_).forEach(([name, handler]) => {
                (handler === target) && delete this.handlers_[name];
            });
        }
        else{// Remove by name
            delete this.handlers_[target];
        }
    }

    public Find(name: string): AnimationActorCallbackType | null{
        if (this.handlers_.hasOwnProperty(name)){
            let handler = this.handlers_[name];
            return ((typeof handler === 'function') ? handler : (params: IAnimationActorParams) => (handler as IAnimationActor).Handle(params));
        }
        return null;
    }
}

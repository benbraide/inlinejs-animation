import { AnimationEaseCallbackType, IAnimationEase, IAnimationEaseCollection, IAnimationEaseParams } from "@benbraide/inlinejs";

export class AnimationEaseCollection implements IAnimationEaseCollection{
    private handlers_: Record<string, IAnimationEase | AnimationEaseCallbackType> = {};
    
    public Add(handler: IAnimationEase | AnimationEaseCallbackType, name?: string){
        if (typeof handler !== 'function'){
            this.handlers_[handler.GetName()] = handler;
        }
        else if (name){
            this.handlers_[name] = handler;
        }
    }

    public Remove(target: string | IAnimationEase | AnimationEaseCallbackType){
        if (typeof target !== 'string'){
            Object.entries(this.handlers_).forEach(([name, handler]) => {
                (handler === target) && delete this.handlers_[name];
            });
        }
        else{// Remove by name
            delete this.handlers_[target];
        }
    }

    public Find(name: string): AnimationEaseCallbackType | null{
        if (this.handlers_.hasOwnProperty(name)){
            let handler = this.handlers_[name];
            return ((typeof handler === 'function') ? handler : (params: IAnimationEaseParams) => (handler as IAnimationEase).Handle(params));
        }
        return null;
    }
}

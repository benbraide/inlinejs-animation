import { AnimationCreatorCallbackType, IAnimationCreatorCollection } from "@benbraide/inlinejs";

export class AnimationCreatorCollection implements IAnimationCreatorCollection{
    private list_: Record<string, AnimationCreatorCallbackType> = {};
    
    public Add(name: string, creator: AnimationCreatorCallbackType){
        this.list_[name] = creator;
    }

    public Remove(target: string | AnimationCreatorCallbackType){
        if (typeof target !== 'string'){
            Object.entries(this.list_).forEach(([name, creator]) => {
                (creator === target) && delete this.list_[name];
            });
        }
        else{// Remove by name
            delete this.list_[target];
        }
    }

    public Find(name: string): AnimationCreatorCallbackType | null{
        return (this.list_.hasOwnProperty(name) ? this.list_[name] : null);
    }
}

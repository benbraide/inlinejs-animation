import { IAnimationEase, IAnimationEaseParams, AnimationEaseCallbackType } from "@benbraide/inlinejs";

export class CompositeAnimationEase implements IAnimationEase{
    private eases_: Array<IAnimationEase | AnimationEaseCallbackType>;

    public constructor(eases: Array<IAnimationEase | AnimationEaseCallbackType>){
        this.eases_ = ((eases && Array.isArray(eases)) ? eases : []);
    }
    
    public GetName(){
        return '[CompositeAnimationEase]';
    }

    public Handle(params: IAnimationEaseParams){
        const callEase = (ease: IAnimationEase | AnimationEaseCallbackType) => ((typeof ease === 'function') ? ease(params) : ease.Handle(params));
        return this.eases_.reduce((a, b) => (a * callEase(b)), 1);
    }

    public AddEase(ease: IAnimationEase | AnimationEaseCallbackType){
        this.eases_.push(ease);
    }

    public RemoveEase(ease: IAnimationEase | AnimationEaseCallbackType){
        this.eases_ = this.eases_.filter(a => (a !== ease));
    }

    public RemoveAll(){
        this.eases_ = [];
    }
}

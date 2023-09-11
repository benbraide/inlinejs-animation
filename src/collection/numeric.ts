import { IAnimationNamedNumericCollection } from "@benbraide/inlinejs";

export class AnimationNameNumericCollection implements IAnimationNamedNumericCollection{
    private values_: Record<string, number> = {};
    
    public Add(name: string, value: number){
        this.values_[name] = value;
    }

    public Remove(name: string){
        delete this.values_[name];
    }

    public Find(name: string): number | null{
        return (this.values_.hasOwnProperty(name) ? this.values_[name] : null);
    }
}

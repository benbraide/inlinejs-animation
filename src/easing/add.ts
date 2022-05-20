import {
    GetGlobal,
    IsObject,
    AnimationEaseCallbackType,
    IAnimationConcept,
    IAnimationEase,
    IAnimationEaseCallbackDetails
} from "@benbraide/inlinejs";

export function AddAnimationEase(handler: IAnimationEase | IAnimationEaseCallbackDetails){
    let name = '', callback: AnimationEaseCallbackType | null = null;
    if (IsObject(handler)){//Details provided
        ({name, callback} = <IAnimationEaseCallbackDetails>handler);
        if (name && callback){
            GetGlobal().GetConcept<IAnimationConcept>('animation')?.GetEaseCollection().Add(callback, name);
        }
    }
    else{//Instance provided
        GetGlobal().GetConcept<IAnimationConcept>('animation')?.GetEaseCollection().Add(<IAnimationEase>handler);
    }
}

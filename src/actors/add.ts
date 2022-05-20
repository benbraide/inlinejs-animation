import {
    GetGlobal,
    IsObject,
    AnimationActorCallbackType,
    IAnimationActor,
    IAnimationActorCallbackDetails,
    IAnimationConcept
} from "@benbraide/inlinejs";

export function AddAnimationActor(handler: IAnimationActor | IAnimationActorCallbackDetails){
    let name = '', callback: AnimationActorCallbackType | null = null;
    if (IsObject(handler)){//Details provided
        ({name, callback} = <IAnimationActorCallbackDetails>handler);
        if (name && callback){
            GetGlobal().GetConcept<IAnimationConcept>('animation')?.GetActorCollection().Add(callback, name);
        }
    }
    else{//Instance provided
        GetGlobal().GetConcept<IAnimationConcept>('animation')?.GetActorCollection().Add(<IAnimationActor>handler);
    }
}

import { IsObject, AnimationActorCallbackType, IAnimationActor, IAnimationActorCallbackDetails, IAnimationActorParams } from "@benbraide/inlinejs";

export function CallAnimationActor(handler: IAnimationActor | IAnimationActorCallbackDetails | AnimationActorCallbackType, params: IAnimationActorParams){
    if (IsObject(handler)){//Details provided
        return (handler as IAnimationActorCallbackDetails).callback(params);
    }

    return ((typeof handler === 'function') ? handler(params) : (handler as IAnimationActor).Handle(params));
}

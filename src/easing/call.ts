import { IsObject, AnimationEaseCallbackType, IAnimationEase, IAnimationEaseCallbackDetails, IAnimationEaseParams } from "@benbraide/inlinejs";

export function CallAnimationEase(handler: IAnimationEase | IAnimationEaseCallbackDetails | AnimationEaseCallbackType, params: IAnimationEaseParams){
    if (IsObject(handler)){//Details provided
        return (handler as IAnimationEaseCallbackDetails).callback(params);
    }

    return ((typeof handler === 'function') ? handler(params) : (handler as IAnimationEase).Handle(params));
}

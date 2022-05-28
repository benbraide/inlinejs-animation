import {
    FindComponentById,
    GetGlobal,
    IAnimationTransition,
    Nothing,
} from "@benbraide/inlinejs";

import { IFindTransitionDataParams } from "../types";

export function FindTransitionData({ componentId, component, contextElement }: IFindTransitionDataParams){
    let data: IAnimationTransition | Nothing = (component || FindComponentById(componentId))?.FindElementScope(contextElement)?.GetData('transition');
    return ((!data || GetGlobal().IsNothing(data)) ? null : <IAnimationTransition>data);
}

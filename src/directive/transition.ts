import {
    FindComponentById,
    AddDirectiveHandler,
    CreateDirectiveHandlerCallback,
    EvaluateLater,
    GetGlobal,
    UseEffect,
    IAnimationConcept,
    IAnimationTransition,
    Nothing,
    BindEvent,
    DefaultTransitionDelay,
    DefaultTransitionDuration,
    DefaultTransitionRepeats,
    IDirectiveHandlerParams,
    ExtractDuration,
    IsObject
} from "@benbraide/inlinejs";

import { IAnimationTransitionExtended } from "../types";
import { FindTransitionData } from "../utilities/find-data";

interface INumericHandlerParams{
    data: IAnimationTransition | Nothing;
    key: string;
    defaultValue: number;
    componentId: string;
    contextElement: HTMLElement;
    expression: string;
    isDuration: boolean;
}

function HandleNumeric({ data, key, defaultValue, componentId, contextElement, expression, isDuration }: INumericHandlerParams){
    if (GetGlobal().IsNothing(data)){
        return;
    }

    let evaluate = EvaluateLater({ componentId, contextElement, expression, disableFunctionCall: true }), update = (value: any) => {
        if (isDuration && typeof value === 'string'){
            (data as IAnimationTransition)[key] = (ExtractDuration(value) || defaultValue);
        }
        else{
            (data as IAnimationTransition)[key] = (((typeof value === 'number') && value) || defaultValue);
        }
    };

    UseEffect({ componentId, contextElement,
        callback: () => evaluate(update),
    });
}

function GetData({ componentId, component, contextElement, argOptions }: IDirectiveHandlerParams){
    let data = FindTransitionData({ componentId, component, contextElement });
    if (!data){
        data = {
            actor: null,
            ease: null,
            duration: DefaultTransitionDuration,
            repeats: DefaultTransitionRepeats,
            delay: DefaultTransitionDelay,
            allowed: (!argOptions.includes('normal') ? (argOptions.includes('reversed') ? 'reversed' : 'both') : 'normal'),
        };

        (component || FindComponentById(componentId))?.FindElementScope(contextElement)?.SetData('transition', data);
    }

    return data;
}

export const TransitionDirectiveHandler = CreateDirectiveHandlerCallback('transition', ({ componentId, component, contextElement, expression, argKey, argOptions, ...rest }) => {
    if (BindEvent({ contextElement, expression,
        component: (component || componentId),
        key: 'transition',
        event: argKey,
        defaultEvent: 'enter',
        eventWhitelist: ['leave', 'canceled'],
        options: argOptions,
        optionBlacklist: ['window', 'document', 'outside'],
    })){
        return;
    }
    
    let data = GetData({ componentId, component, contextElement, expression, argKey, argOptions, ...rest });
    if (argKey === 'actor' && !GetGlobal().IsNothing(data)){
        let evaluate = EvaluateLater({ componentId, contextElement, expression, disableFunctionCall: true }), updateActor = (value: any) => {
            if (typeof value === 'string'){
                (data as IAnimationTransition).actor = (GetGlobal().GetConcept<IAnimationConcept>('animation')?.GetActorCollection().Find(value) || null);
            }
            else{
                (data as IAnimationTransition).actor = (value || null);
            }
        };

        UseEffect({ componentId, contextElement,
            callback: () => evaluate(updateActor),
        });
    }
    else if (argKey === 'ease' && !GetGlobal().IsNothing(data)){
        let evaluate = EvaluateLater({ componentId, contextElement, expression, disableFunctionCall: true }), updateEase = (value: any) => {
            if (typeof value === 'string'){
                (data as IAnimationTransition).ease = (GetGlobal().GetConcept<IAnimationConcept>('animation')?.GetEaseCollection().Find(value) || null);
            }
            else{
                (data as IAnimationTransition).ease = (value || null);
            }
        };

        UseEffect({ componentId, contextElement,
            callback: () => evaluate(updateEase),
        });
    }
    else if (argKey === 'target'){
        let evaluate = EvaluateLater({ componentId, contextElement, expression });
        UseEffect({ componentId, contextElement,
            callback: () => evaluate(value => ((data as IAnimationTransitionExtended).target = ((value instanceof HTMLElement) ? value : undefined))),
        });
    }
    else if (argKey === 'duration'){
        HandleNumeric({ data, componentId, contextElement, expression, key: argKey, defaultValue: 300, isDuration: true });
    }
    else if (argKey === 'repeats' || argKey === 'delay'){
        HandleNumeric({ data, componentId, contextElement, expression, key: argKey, defaultValue: 0, isDuration: (argKey === 'delay') });
    }
    else{//Check for object
        EvaluateLater({ componentId, contextElement, expression })((value) => {
            if (IsObject(value)){//Copy props
                Object.entries(value).forEach(([key, value]) => (data[key] = value));
            }
        });
    }
});

export function TransitionDirectiveHandlerCompact(){
    AddDirectiveHandler(TransitionDirectiveHandler);
}

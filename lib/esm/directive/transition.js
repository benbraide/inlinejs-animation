var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { FindComponentById, AddDirectiveHandler, CreateDirectiveHandlerCallback, EvaluateLater, GetGlobal, UseEffect, BindEvent, DefaultTransitionDelay, DefaultTransitionDuration, DefaultTransitionRepeats, ExtractDuration, IsObject, CreateInplaceProxy, BuildProxyOptions } from "@benbraide/inlinejs";
import { FindTransitionData } from "../utilities/find-data";
import { CollectAnimationActors, CollectAnimationEasings } from "../utilities/collect";
import { FindFirst } from "../utilities/find";
function HandleNumeric({ data, key, defaultValue, componentId, contextElement, expression, isDuration }) {
    if (GetGlobal().IsNothing(data)) {
        return;
    }
    let evaluate = EvaluateLater({ componentId, contextElement, expression, disableFunctionCall: true }), update = (value) => {
        if (isDuration && typeof value === 'string') {
            data[key] = (ExtractDuration(value) || defaultValue);
        }
        else {
            data[key] = (((typeof value === 'number') && value) || defaultValue);
        }
    };
    UseEffect({ componentId, contextElement,
        callback: () => evaluate(update),
    });
}
function GetData({ componentId, component, contextElement, argOptions }) {
    var _a, _b;
    let data = FindTransitionData({ componentId, component, contextElement });
    if (!data) {
        data = {
            actor: null,
            ease: null,
            duration: DefaultTransitionDuration,
            repeats: DefaultTransitionRepeats,
            delay: DefaultTransitionDelay,
            allowed: (!argOptions.includes('normal') ? (argOptions.includes('reversed') ? 'reversed' : 'both') : 'normal'),
        };
        (_b = (_a = (component || FindComponentById(componentId))) === null || _a === void 0 ? void 0 : _a.FindElementScope(contextElement)) === null || _b === void 0 ? void 0 : _b.SetData('transition', data);
    }
    return data;
}
export const TransitionDirectiveHandler = CreateDirectiveHandlerCallback('transition', (_a) => {
    var { componentId, component, contextElement, expression, argKey, argOptions } = _a, rest = __rest(_a, ["componentId", "component", "contextElement", "expression", "argKey", "argOptions"]);
    if (BindEvent({ contextElement, expression,
        component: (component || componentId),
        key: 'transition',
        event: argKey,
        defaultEvent: 'enter',
        eventWhitelist: ['leave', 'canceled'],
        options: argOptions,
        optionBlacklist: ['window', 'document', 'outside'],
    })) {
        return;
    }
    const data = GetData(Object.assign({ componentId, component, contextElement, expression, argKey, argOptions }, rest));
    if (argKey === 'actor' && !GetGlobal().IsNothing(data)) {
        let evaluate = EvaluateLater({ componentId, contextElement, expression, disableFunctionCall: true }), updateActor = (value) => {
            var _a;
            if (typeof value === 'string') {
                data.actor = ((_a = GetGlobal().GetConcept('animation')) === null || _a === void 0 ? void 0 : _a.GetActorCollection().Find(value)) || null;
            }
            else if (Array.isArray(value)) {
                data.actor = CollectAnimationActors(value);
            }
            else {
                data.actor = value || null;
            }
        };
        UseEffect({ componentId, contextElement,
            callback: () => evaluate(updateActor),
        });
    }
    else if (argKey === 'ease' && !GetGlobal().IsNothing(data)) {
        let evaluate = EvaluateLater({ componentId, contextElement, expression, disableFunctionCall: true }), updateEase = (value) => {
            var _a;
            if (typeof value === 'string') {
                data.ease = (((_a = GetGlobal().GetConcept('animation')) === null || _a === void 0 ? void 0 : _a.GetEaseCollection().Find(value)) || null);
            }
            else if (Array.isArray(value)) {
                data.ease = CollectAnimationEasings(value);
            }
            else {
                data.ease = (value || null);
            }
        };
        UseEffect({ componentId, contextElement,
            callback: () => evaluate(updateEase),
        });
    }
    else if (argKey === 'target') {
        let evaluate = EvaluateLater({ componentId, contextElement, expression });
        UseEffect({ componentId, contextElement,
            callback: () => evaluate(value => (data.target = ((value instanceof HTMLElement) ? value : undefined))),
        });
    }
    else if (argKey === 'duration') {
        HandleNumeric({ data, componentId, contextElement, expression, key: argKey, defaultValue: 300, isDuration: true });
    }
    else if (argKey === 'repeats' || argKey === 'delay') {
        HandleNumeric({ data, componentId, contextElement, expression, key: argKey, defaultValue: 0, isDuration: (argKey === 'delay') });
    }
    else if (argKey) {
        const [actor, ease, numeric] = FindFirst(argKey) || [null, null, null];
        if (actor !== null) {
            data.actor = actor;
        }
        else if (ease !== null) {
            data.ease = ease;
        }
        else if (numeric !== null) {
            data.duration = numeric;
        }
    }
    else { //Check for object
        EvaluateLater({ componentId, contextElement, expression })((value) => {
            var _a, _b;
            if (IsObject(value)) { //Copy props
                Object.entries(value).forEach(([key, value]) => (data[key] = value));
            }
            else if (value instanceof HTMLElement) {
                let getData, cachedData = null, nextTickQueued = false;
                if ('GetData' in value && typeof value['GetData'] === 'function') {
                    getData = () => value['GetData']();
                }
                else {
                    getData = () => FindTransitionData({ componentId, contextElement: value });
                }
                const getCachedData = () => {
                    var _a;
                    if (!cachedData) {
                        cachedData = getData();
                        if (!nextTickQueued) {
                            nextTickQueued = true;
                            (_a = FindComponentById(componentId)) === null || _a === void 0 ? void 0 : _a.GetBackend().changes.AddNextTickHandler(() => {
                                cachedData = null;
                                nextTickQueued = false;
                            });
                        }
                    }
                    return cachedData;
                };
                (_b = (_a = FindComponentById(componentId)) === null || _a === void 0 ? void 0 : _a.FindElementScope(contextElement)) === null || _b === void 0 ? void 0 : _b.SetData('transition', CreateInplaceProxy(BuildProxyOptions({
                    setter: () => true,
                    getter: (prop) => {
                        const data = getCachedData();
                        return (prop && data && data.hasOwnProperty(prop)) ? data[prop] : undefined;
                    },
                    lookup: ['actor', 'ease', 'duration', 'repeats', 'delay', 'allowed'],
                })));
            }
        });
    }
});
export function TransitionDirectiveHandlerCompact() {
    AddDirectiveHandler(TransitionDirectiveHandler);
}

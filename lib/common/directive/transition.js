"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransitionDirectiveHandlerCompact = exports.TransitionDirectiveHandler = void 0;
const inlinejs_1 = require("@benbraide/inlinejs");
const find_data_1 = require("../utilities/find-data");
const collect_1 = require("../utilities/collect");
const find_1 = require("../utilities/find");
function HandleNumeric({ data, key, defaultValue, componentId, contextElement, expression, isDuration }) {
    if ((0, inlinejs_1.GetGlobal)().IsNothing(data)) {
        return;
    }
    let evaluate = (0, inlinejs_1.EvaluateLater)({ componentId, contextElement, expression, disableFunctionCall: true }), update = (value) => {
        if (isDuration && typeof value === 'string') {
            data[key] = ((0, inlinejs_1.ExtractDuration)(value) || defaultValue);
        }
        else {
            data[key] = (((typeof value === 'number') && value) || defaultValue);
        }
    };
    (0, inlinejs_1.UseEffect)({ componentId, contextElement,
        callback: () => evaluate(update),
    });
}
function GetData({ componentId, component, contextElement, argOptions }) {
    var _a, _b;
    let data = (0, find_data_1.FindTransitionData)({ componentId, component, contextElement });
    if (!data) {
        data = {
            actor: null,
            ease: null,
            duration: inlinejs_1.DefaultTransitionDuration,
            repeats: inlinejs_1.DefaultTransitionRepeats,
            delay: inlinejs_1.DefaultTransitionDelay,
            allowed: (!argOptions.includes('normal') ? (argOptions.includes('reversed') ? 'reversed' : 'both') : 'normal'),
        };
        (_b = (_a = (component || (0, inlinejs_1.FindComponentById)(componentId))) === null || _a === void 0 ? void 0 : _a.FindElementScope(contextElement)) === null || _b === void 0 ? void 0 : _b.SetData('transition', data);
    }
    return data;
}
exports.TransitionDirectiveHandler = (0, inlinejs_1.CreateDirectiveHandlerCallback)('transition', (_a) => {
    var { componentId, component, contextElement, expression, argKey, argOptions } = _a, rest = __rest(_a, ["componentId", "component", "contextElement", "expression", "argKey", "argOptions"]);
    if ((0, inlinejs_1.BindEvent)({ contextElement, expression,
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
    if (argKey === 'actor' && !(0, inlinejs_1.GetGlobal)().IsNothing(data)) {
        let evaluate = (0, inlinejs_1.EvaluateLater)({ componentId, contextElement, expression, disableFunctionCall: true }), updateActor = (value) => {
            var _a;
            if (typeof value === 'string') {
                data.actor = ((_a = (0, inlinejs_1.GetGlobal)().GetConcept('animation')) === null || _a === void 0 ? void 0 : _a.GetActorCollection().Find(value)) || null;
            }
            else if (Array.isArray(value)) {
                data.actor = (0, collect_1.CollectAnimationActors)(value);
            }
            else {
                data.actor = value || null;
            }
        };
        (0, inlinejs_1.UseEffect)({ componentId, contextElement,
            callback: () => evaluate(updateActor),
        });
    }
    else if (argKey === 'ease' && !(0, inlinejs_1.GetGlobal)().IsNothing(data)) {
        let evaluate = (0, inlinejs_1.EvaluateLater)({ componentId, contextElement, expression, disableFunctionCall: true }), updateEase = (value) => {
            var _a;
            if (typeof value === 'string') {
                data.ease = (((_a = (0, inlinejs_1.GetGlobal)().GetConcept('animation')) === null || _a === void 0 ? void 0 : _a.GetEaseCollection().Find(value)) || null);
            }
            else if (Array.isArray(value)) {
                data.ease = (0, collect_1.CollectAnimationEasings)(value);
            }
            else {
                data.ease = (value || null);
            }
        };
        (0, inlinejs_1.UseEffect)({ componentId, contextElement,
            callback: () => evaluate(updateEase),
        });
    }
    else if (argKey === 'target') {
        let evaluate = (0, inlinejs_1.EvaluateLater)({ componentId, contextElement, expression });
        (0, inlinejs_1.UseEffect)({ componentId, contextElement,
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
        const [actor, ease, numeric] = (0, find_1.FindFirst)(argKey) || [null, null, null];
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
        (0, inlinejs_1.EvaluateLater)({ componentId, contextElement, expression })((value) => {
            var _a, _b;
            if ((0, inlinejs_1.IsObject)(value)) { //Copy props
                Object.entries(value).forEach(([key, value]) => (data[key] = value));
            }
            else if (value instanceof HTMLElement) {
                let getData, cachedData = null, nextTickQueued = false;
                if ('GetData' in value && typeof value['GetData'] === 'function') {
                    getData = () => value['GetData']();
                }
                else {
                    getData = () => (0, find_data_1.FindTransitionData)({ componentId, contextElement: value });
                }
                const getCachedData = () => {
                    var _a;
                    if (!cachedData) {
                        cachedData = getData();
                        if (!nextTickQueued) {
                            nextTickQueued = true;
                            (_a = (0, inlinejs_1.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.GetBackend().changes.AddNextTickHandler(() => {
                                cachedData = null;
                                nextTickQueued = false;
                            });
                        }
                    }
                    return cachedData;
                };
                (_b = (_a = (0, inlinejs_1.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.FindElementScope(contextElement)) === null || _b === void 0 ? void 0 : _b.SetData('transition', (0, inlinejs_1.CreateInplaceProxy)((0, inlinejs_1.BuildProxyOptions)({
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
function TransitionDirectiveHandlerCompact() {
    (0, inlinejs_1.AddDirectiveHandler)(exports.TransitionDirectiveHandler);
}
exports.TransitionDirectiveHandlerCompact = TransitionDirectiveHandlerCompact;

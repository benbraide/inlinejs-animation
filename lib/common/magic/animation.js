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
exports.AnimationMagicHandlerCompact = exports.AnimationMagicHandler = void 0;
const inlinejs_1 = require("@benbraide/inlinejs");
const generic_1 = require("../actors/scene/generic");
const call_1 = require("../easing/call");
const concurrent_1 = require("../actors/composite/concurrent");
const shared_1 = require("../actors/composite/shared");
function CreateAnimationProxy() {
    let storedConcept = null, getConcept = () => (storedConcept || (storedConcept = (0, inlinejs_1.GetGlobal)().GetConcept('animation')));
    const methods = {
        collect: (...actors) => {
            let validActors = actors.map(actor => { var _a; return ((typeof actor === 'string') ? (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.GetActorCollection().Find(actor) : actor); }).filter(actor => !!actor);
            return new concurrent_1.ConcurrentCompositeAnimationActor(validActors);
        },
        shared: (...actors) => {
            let validActors = actors.map((info) => {
                var _a, _b;
                if (typeof info === 'string') {
                    return { actor: (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.GetActorCollection().Find(info), slice: { from: 0, to: 1 } };
                }
                if ('slice' in info) {
                    return {
                        actor: ((typeof info.actor === 'string') ? (_b = getConcept()) === null || _b === void 0 ? void 0 : _b.GetActorCollection().Find(info.actor) : info.actor),
                        slice: info.slice,
                    };
                }
                return { actor: info, slice: { from: 0, to: 1 } };
            }).filter(info => !!info.actor);
            return new shared_1.SharedCompositeAnimationActor(validActors);
        },
        invert: (ease) => {
            var _a;
            let validEase = ((typeof ease === 'string') ? (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.GetEaseCollection().Find(ease) : ease);
            return (_a) => {
                var { fraction } = _a, rest = __rest(_a, ["fraction"]);
                return (validEase ? (1 - (0, call_1.CallAnimationEase)(validEase, Object.assign({ fraction }, rest))) : fraction);
            };
        },
        applySceneRange: generic_1.ApplyRange,
        applySceneTransform: generic_1.ApplyTransform,
        applySceneRangeAndTransform: generic_1.ApplyRangeAndTransform,
        formatSceneValue: generic_1.FormatValue,
        getConcept,
    };
    const groups = {
        creators: (0, inlinejs_1.CreateInplaceProxy)((0, inlinejs_1.BuildGetterProxyOptions)({
            getter: (prop) => { var _a; return (prop && ((_a = getConcept()) === null || _a === void 0 ? void 0 : _a.GetCreatorCollection().Find(prop))); },
        })),
        actors: (0, inlinejs_1.CreateInplaceProxy)((0, inlinejs_1.BuildGetterProxyOptions)({
            getter: (prop) => { var _a; return (prop && ((_a = getConcept()) === null || _a === void 0 ? void 0 : _a.GetActorCollection().Find(prop))); },
        })),
        eases: (0, inlinejs_1.CreateInplaceProxy)((0, inlinejs_1.BuildGetterProxyOptions)({
            getter: (prop) => { var _a; return (prop && ((_a = getConcept()) === null || _a === void 0 ? void 0 : _a.GetEaseCollection().Find(prop))); },
        })),
        numerics: (0, inlinejs_1.CreateInplaceProxy)((0, inlinejs_1.BuildGetterProxyOptions)({
            getter: (prop) => { var _a; return (prop && ((_a = getConcept()) === null || _a === void 0 ? void 0 : _a.GetNamedNumericCollection().Find(prop))); },
        })),
    };
    return (0, inlinejs_1.CreateInplaceProxy)((0, inlinejs_1.BuildGetterProxyOptions)({
        getter: (prop) => {
            if (!prop) {
                return;
            }
            if (groups.hasOwnProperty(prop)) {
                return groups[prop];
            }
            if (methods.hasOwnProperty(prop)) {
                return methods[prop];
            }
            let concept = getConcept();
            if (!concept) {
                return;
            }
            let creator = concept.GetCreatorCollection().Find(prop);
            if (creator) {
                return creator;
            }
            let actor = concept.GetActorCollection().Find(prop);
            if (actor) {
                return actor;
            }
            let ease = concept.GetEaseCollection().Find(prop);
            if (ease) {
                return ease;
            }
            let numeric = concept.GetNamedNumericCollection().Find(prop);
            if (numeric !== null) {
                return numeric;
            }
        },
        lookup: [...Object.keys(groups), ...Object.keys(methods)],
    }));
}
const AnimationProxy = CreateAnimationProxy();
exports.AnimationMagicHandler = (0, inlinejs_1.CreateMagicHandlerCallback)('animation', () => AnimationProxy);
function AnimationMagicHandlerCompact() {
    (0, inlinejs_1.AddMagicHandler)(exports.AnimationMagicHandler);
}
exports.AnimationMagicHandlerCompact = AnimationMagicHandlerCompact;

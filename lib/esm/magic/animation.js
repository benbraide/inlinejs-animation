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
import { GetGlobal, AddMagicHandler, CreateMagicHandlerCallback, BuildGetterProxyOptions, CreateInplaceProxy } from "@benbraide/inlinejs";
import { ApplyRange, ApplyRangeAndTransform, ApplyTransform, FormatValue } from "../actors/scene/generic";
import { CallAnimationEase } from "../easing/call";
import { ConcurrentCompositeAnimationActor } from "../actors/composite/concurrent";
import { SharedCompositeAnimationActor } from "../actors/composite/shared";
import { CompositeAnimationEase } from "../easing/composite";
function CreateAnimationProxy() {
    let storedConcept = null, getConcept = () => (storedConcept || (storedConcept = GetGlobal().GetConcept('animation')));
    const methods = {
        collect: (...actors) => {
            const validActors = actors.map(actor => { var _a; return ((typeof actor === 'string') ? (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.GetActorCollection().Find(actor) : actor); }).filter(actor => !!actor);
            return new ConcurrentCompositeAnimationActor(validActors);
        },
        shared: (...actors) => {
            const validActors = actors.map((info) => {
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
            return new SharedCompositeAnimationActor(validActors);
        },
        composite: (...eases) => {
            const validEases = eases.map(ease => { var _a; return ((typeof ease === 'string') ? (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.GetEaseCollection().Find(ease) : ease); }).filter(ease => !!ease);
            return new CompositeAnimationEase(validEases);
        },
        invert: (ease) => {
            var _a;
            const validEase = ((typeof ease === 'string') ? (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.GetEaseCollection().Find(ease) : ease);
            return (_a) => {
                var { fraction } = _a, rest = __rest(_a, ["fraction"]);
                return (validEase ? (1 - CallAnimationEase(validEase, Object.assign({ fraction }, rest))) : fraction);
            };
        },
        applySceneRange: ApplyRange,
        applySceneTransform: ApplyTransform,
        applySceneRangeAndTransform: ApplyRangeAndTransform,
        formatSceneValue: FormatValue,
        getConcept,
    };
    const groups = {
        creators: CreateInplaceProxy(BuildGetterProxyOptions({
            getter: (prop) => { var _a; return (prop && ((_a = getConcept()) === null || _a === void 0 ? void 0 : _a.GetCreatorCollection().Find(prop))); },
        })),
        actors: CreateInplaceProxy(BuildGetterProxyOptions({
            getter: (prop) => { var _a; return (prop && ((_a = getConcept()) === null || _a === void 0 ? void 0 : _a.GetActorCollection().Find(prop))); },
        })),
        eases: CreateInplaceProxy(BuildGetterProxyOptions({
            getter: (prop) => { var _a; return (prop && ((_a = getConcept()) === null || _a === void 0 ? void 0 : _a.GetEaseCollection().Find(prop))); },
        })),
        numerics: CreateInplaceProxy(BuildGetterProxyOptions({
            getter: (prop) => { var _a; return (prop && ((_a = getConcept()) === null || _a === void 0 ? void 0 : _a.GetNamedNumericCollection().Find(prop))); },
        })),
    };
    return CreateInplaceProxy(BuildGetterProxyOptions({
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
            const concept = getConcept();
            if (!concept) {
                return;
            }
            const creator = concept.GetCreatorCollection().Find(prop);
            if (creator) {
                return creator;
            }
            const actor = concept.GetActorCollection().Find(prop);
            if (actor) {
                return actor;
            }
            const ease = concept.GetEaseCollection().Find(prop);
            if (ease) {
                return ease;
            }
            const numeric = concept.GetNamedNumericCollection().Find(prop);
            if (numeric !== null) {
                return numeric;
            }
        },
        lookup: [...Object.keys(groups), ...Object.keys(methods)],
    }));
}
const AnimationProxy = CreateAnimationProxy();
export const AnimationMagicHandler = CreateMagicHandlerCallback('animation', () => AnimationProxy);
export function AnimationMagicHandlerCompact() {
    AddMagicHandler(AnimationMagicHandler);
}

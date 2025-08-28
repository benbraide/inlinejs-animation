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
exports.AnimateDirectiveHandlerCompact = exports.AnimateDirectiveHandler = void 0;
const inlinejs_1 = require("@benbraide/inlinejs");
const find_data_1 = require("../utilities/find-data");
exports.AnimateDirectiveHandler = (0, inlinejs_1.CreateDirectiveHandlerCallback)('animate', (_a) => {
    var _b, _c, _d, _e, _f, _g, _h, _j;
    var { componentId, contextElement, argKey, argOptions } = _a, rest = __rest(_a, ["componentId", "contextElement", "argKey", "argOptions"]);
    let options = {
        alternate: argOptions.includes('alternate'),
        normal: argOptions.includes('normal'),
        reset: argOptions.includes('reset'),
        inner: (argKey === 'inner'),
    };
    argOptions = argOptions.filter(opt => (opt !== 'normal'));
    let traverseTargets = (callback) => (options.inner ? Array.from(contextElement.children) : [contextElement]).forEach((target) => {
        callback(target);
    });
    let checkpoint = 0, bind = () => {
        let waitTransition = (reverse, target, callback) => {
            let myCheckpoint = ++checkpoint;
            transitionCancel = (0, inlinejs_1.WaitTransition)({ componentId, contextElement, target, reverse,
                callback: (waited) => {
                    if (myCheckpoint == checkpoint) {
                        transitionCancel = null;
                        if (waited) {
                            callback && callback();
                            if (options.reset && target) {
                                target.style.removeProperty('transform');
                                target.style.removeProperty('opacity');
                            }
                        }
                        else if (target) {
                            target.style.removeProperty('transform');
                            target.style.removeProperty('opacity');
                        }
                    }
                },
            });
        };
        let childIndex = 0, handleInner = (reverse) => {
            if (childIndex < contextElement.children.length) {
                waitTransition(reverse, contextElement.children[childIndex++], () => handleInner(reverse));
            }
            else {
                repeat(options.alternate ? !reverse : reverse);
            }
        };
        let begin = (reverse) => {
            var _a;
            checkpoint += 1;
            if (options.inner) {
                childIndex = 0;
                handleInner(reverse);
            }
            else {
                waitTransition(reverse, (_a = (0, find_data_1.FindTransitionData)({ componentId, contextElement })) === null || _a === void 0 ? void 0 : _a.target, () => repeat(options.alternate ? !reverse : reverse));
            }
        };
        let repeat = (reverse) => {
            var _a, _b;
            let info = (0, inlinejs_1.ResolveTransition)((((_b = (_a = (0, inlinejs_1.FindComponentById)(componentId)) === null || _a === void 0 ? void 0 : _a.FindElementScope(contextElement)) === null || _b === void 0 ? void 0 : _b.GetData('transition')) || null), reverse);
            if (info && info.repeats) {
                let myCheckpoint = ++checkpoint;
                (info.repeats > 0) && (info.repeats -= 1);
                setTimeout(() => {
                    if (myCheckpoint == checkpoint) {
                        contextElement.dispatchEvent(new CustomEvent('animate.repeat'));
                        begin(reverse);
                    }
                }, (info.delay || inlinejs_1.DefaultTransitionDelay));
            }
        };
        let lastValue = false, transitionCancel = null, apply = (value) => {
            if (!!value === lastValue) {
                return;
            }
            if (transitionCancel) {
                transitionCancel();
                (options.inner ? Array.from(contextElement.children) : [contextElement]).forEach(child => {
                    child.style.removeProperty('transform');
                    child.style.removeProperty('opacity');
                });
            }
            if (!options.normal || !!value) {
                begin(!value);
            }
            lastValue = !!value;
        };
        (0, inlinejs_1.LazyCheck)(Object.assign(Object.assign({ componentId, contextElement, argKey, argOptions }, rest), { callback: apply }));
    };
    if (options.inner) {
        (_c = (_b = (0, inlinejs_1.FindComponentById)(componentId)) === null || _b === void 0 ? void 0 : _b.FindElementScope(contextElement)) === null || _c === void 0 ? void 0 : _c.AddPostProcessCallback(bind);
    }
    else { //Immediate
        bind();
    }
    let data = (_e = (_d = (0, inlinejs_1.FindComponentById)(componentId)) === null || _d === void 0 ? void 0 : _d.FindElementScope(contextElement)) === null || _e === void 0 ? void 0 : _e.GetData('transition');
    if (!data || (0, inlinejs_1.GetGlobal)().IsNothing(data)) {
        (_g = (_f = (0, inlinejs_1.FindComponentById)(componentId)) === null || _f === void 0 ? void 0 : _f.FindElementScope(contextElement)) === null || _g === void 0 ? void 0 : _g.SetData('transition', {
            actor: null,
            ease: null,
            duration: inlinejs_1.DefaultTransitionDuration,
            repeats: inlinejs_1.DefaultTransitionRepeats,
            delay: inlinejs_1.DefaultTransitionDelay,
            allowed: (!argOptions.includes('normal') ? (argOptions.includes('reversed') ? 'reversed' : 'both') : 'normal'),
        });
    }
    (_j = (_h = (0, inlinejs_1.FindComponentById)(componentId)) === null || _h === void 0 ? void 0 : _h.FindElementScope(contextElement)) === null || _j === void 0 ? void 0 : _j.AddUninitCallback(() => (checkpoint += 1));
});
function AnimateDirectiveHandlerCompact() {
    (0, inlinejs_1.AddDirectiveHandler)(exports.AnimateDirectiveHandler);
}
exports.AnimateDirectiveHandlerCompact = AnimateDirectiveHandlerCompact;

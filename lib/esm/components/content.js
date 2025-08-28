var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { WaitTransition } from "@benbraide/inlinejs";
import { Property, RegisterCustomElement } from "@benbraide/inlinejs-element";
import { AnimationBaseElement } from "./base";
export class AnimateContentElement extends AnimationBaseElement {
    constructor() {
        super();
        this.overlap = 1;
        this.alternate = false;
        this.reset = false;
        this.sequence = false;
        this.reverse = false;
        this.options_.isTemplate = false;
        this.style.removeProperty('display');
    }
    WaitTransition({ componentId, callback, onAbort, reverse }) {
        let content = [...this.children];
        if (content.length == 0) {
            return ((callback(false) && false) || null);
        }
        this.reverse && (reverse = !reverse);
        reverse && (content = content.reverse());
        let alternate = this.alternate, overlap = this.overlap, reset = this.reset, sequence = this.sequence;
        let waitAbort = null, waitTarget = (target, alternated) => {
            let indexCheckpoint = index, computedOverlap = overlap, overlapIndex = (index + 1);
            if (overlapIndex < content.length && content[overlapIndex].hasAttribute('overlap')) {
                computedOverlap = (parseFloat(content[overlapIndex].getAttribute('overlap') || '') || 0);
            }
            return WaitTransition({ componentId, target, reverse: (alternated ? !reverse : reverse),
                callback: (waited) => {
                    if (reset) {
                        target.style.removeProperty('transform');
                        target.style.removeProperty('opacity');
                    }
                    if (waited && !aborted) {
                        (indexCheckpoint == index) && after(alternated);
                    }
                    else {
                        aborted = true;
                    }
                },
                onAbort: () => {
                    target.style.removeProperty('transform');
                    target.style.removeProperty('opacity');
                    onAbort && onAbort();
                },
                onPass: ((computedOverlap == 1) ? undefined : ({ elapsed, duration }) => {
                    let checkpoint = (reverse ? (1 - computedOverlap) : computedOverlap), progress = (elapsed / duration);
                    if (alternate) {
                        progress /= 2;
                        alternated && (progress += 0.5);
                    }
                    (checkpoint <= progress && indexCheckpoint == index) && after(alternated);
                }),
                contextElement: (sequence ? target : this),
                allowRepeats: false,
            });
        };
        let aborted = false, abort = () => {
            aborted = true;
            waitAbort && waitAbort();
        };
        let index = 0, after = (alternated) => {
            if (alternate && !alternated) {
                waitAbort = waitTarget(content[index], true);
            }
            else if (++index < content.length) {
                waitAbort = waitTarget(content[index], false);
            }
            else {
                index = 0;
                callback && callback(true);
            }
        };
        waitAbort = waitTarget(content[index], false);
        return abort;
    }
}
__decorate([
    Property({ type: 'number' })
], AnimateContentElement.prototype, "overlap", void 0);
__decorate([
    Property({ type: 'boolean' })
], AnimateContentElement.prototype, "alternate", void 0);
__decorate([
    Property({ type: 'boolean' })
], AnimateContentElement.prototype, "reset", void 0);
__decorate([
    Property({ type: 'boolean' })
], AnimateContentElement.prototype, "sequence", void 0);
__decorate([
    Property({ type: 'boolean' })
], AnimateContentElement.prototype, "reverse", void 0);
export function AnimateContentElementCompact() {
    RegisterCustomElement(AnimateContentElement, 'animate-content');
}

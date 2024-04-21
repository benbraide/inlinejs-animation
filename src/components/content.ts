import { ITransitionParams, WaitTransition } from "@benbraide/inlinejs";
import { Property, RegisterCustomElement } from "@benbraide/inlinejs-element";
import { AnimationBaseElement } from "./base";

export class AnimateContentElement extends AnimationBaseElement{
    @Property({ type: 'number' })
    public overlap = 1;

    @Property({ type: 'boolean' })
    public alternate = false;

    @Property({ type: 'boolean' })
    public reset = false;

    @Property({ type: 'boolean' })
    public sequence = false;

    @Property({ type: 'boolean' })
    public reverse = false;
    
    public constructor(){
        super();
        this.options_.isTemplate = false;
        this.style.removeProperty('display');
    }

    public WaitTransition({ componentId, callback, onAbort, reverse }: ITransitionParams): (() => void) | null{
        let content = [...this.children];
        if (content.length == 0){
            return ((callback(false) && false) || null);
        }

        this.reverse && (reverse = !reverse);
        reverse && (content = content.reverse());
        
        let alternate = this.alternate, overlap = this.overlap, reset = this.reset, sequence = this.sequence;
        let waitAbort: (() => void) | null = null, waitTarget = (target: HTMLElement, alternated: boolean) => {
            let indexCheckpoint = index, computedOverlap = overlap, overlapIndex = (reverse ? index : (index + 1));
            if (overlapIndex < content.length && content[overlapIndex].hasAttribute('overlap')){
                computedOverlap = (parseFloat(content[overlapIndex].getAttribute('overlap') || '') || 0);
            }
            
            return WaitTransition({ componentId, target, reverse: (alternated ? !reverse : reverse),
                callback: (waited) => {
                    if (reset){
                        target.style.removeProperty('transform');
                        target.style.removeProperty('opacity');
                    }
                    
                    if (waited && !aborted){
                        (indexCheckpoint == index) && after(alternated);
                    }
                    else{
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
                    if (alternate){
                        progress /= 2;
                        alternated && (progress += 0.5);
                    }

                    (checkpoint <= progress && indexCheckpoint == index) && after(true);
                }),
                contextElement: (sequence ? target : this),
                allowRepeats: false,
            });
        };
        
        let aborted = false, abort = () => {
            aborted = true;
            waitAbort && waitAbort();
        };

        let index = 0, after = (alternated: boolean) => {
            if (alternate && !alternated){
                waitAbort = waitTarget(<HTMLElement>content[index], true);
            }
            else if (++index < content.length){
                waitAbort = waitTarget(<HTMLElement>content[index], false);
            }
            else{
                index = 0;
                callback && callback(true);
            }
        };

        waitAbort = waitTarget(<HTMLElement>content[index], false);
        
        return abort;
    }
}

export function AnimateContentElementCompact(){
    RegisterCustomElement(AnimateContentElement, 'animate-content');
}

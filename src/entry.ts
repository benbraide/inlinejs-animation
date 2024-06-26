import {
    GetGlobal,
    WaitForGlobal,
    AnimationCreatorCallbackType,
    IAnimationActorCallbackDetails,
    IAnimationEaseCallbackDetails
} from '@benbraide/inlinejs';

import { AnimationConcept } from './concept';

import { BackAnimationEase, BackInAnimationEase, BackOutAnimationEase, BackInOutAnimationEase } from './easing/back';
import { BounceAnimationEase, BounceInAnimationEase, BounceOutAnimationEase, BounceInOutAnimationEase } from './easing/bounce';
import { CircleAnimationEase, CircleInAnimationEase, CircleOutAnimationEase, CircleInOutAnimationEase } from './easing/circle';
import { CubicAnimationEase, CubicInAnimationEase, CubicOutAnimationEase, CubicInOutAnimationEase } from './easing/cubic';
import { ElasticAnimationEase, ElasticInAnimationEase, ElasticOutAnimationEase, ElasticInOutAnimationEase } from './easing/elastic';
import { ExponentialAnimationEase, ExponentialInAnimationEase, ExponentialOutAnimationEase, ExponentialInOutAnimationEase } from './easing/exponential';
import { QuadraticAnimationEase, QuadraticInAnimationEase, QuadraticOutAnimationEase, QuadraticInOutAnimationEase } from './easing/quadratic';
import { QuartAnimationEase, QuartInAnimationEase, QuartOutAnimationEase, QuartInOutAnimationEase } from './easing/quart';
import { QuintAnimationEase, QuintInAnimationEase, QuintOutAnimationEase, QuintInOutAnimationEase } from './easing/quint';
import { SineAnimationEase, SineInAnimationEase, SineOutAnimationEase, SineInOutAnimationEase } from './easing/sine';
import { CompositeAnimationEase } from './easing/composite';

import { DefaultAnimationEase } from './easing/default';
import { LinearAnimationEase } from './easing/linear';

import { DefaultAnimationActor } from './actors/default';
import { NullAnimationActor } from './actors/null';
import { OpacityAnimationActor } from './actors/opacity';

import { WidthAnimationActor } from './actors/scale/width';
import { HeightAnimationActor } from './actors/scale/height';
import { ZoomAnimationActor } from './actors/scale/zoom';

import { SlideDownAnimationActor } from './actors/translate/slide-down';
import { SlideLeftAnimationActor } from './actors/translate/slide-left';
import { SlideRightAnimationActor } from './actors/translate/slide-right';
import { SlideUpAnimationActor } from './actors/translate/slide-up';

import { SpinAnimationActor } from './actors/rotate/spin';
import { FlipAnimationActor } from './actors/rotate/flip';
import { TossAnimationActor } from './actors/rotate/toss';

import { PulseAnimationActor } from './actors/scene/pulse';
import { HeartbeatAnimationActor } from './actors/scene/heartbeat';

import { BezierAnimationEaseCreator } from './creators/bezier';

import { ScaleAnimationCreator } from './creators/scale';
import { TranslateAnimationCreator } from './creators/translate';
import { RotateAnimationCreator } from './creators/rotate';
import { SceneAnimationCreator } from './creators/scene';

import { ShakeAnimationCreator } from './creators/shake';
import { VibrateAnimationCreator } from './creators/vibrate';
import { RubberbandAnimationCreator } from './creators/rubberband';
import { JelloAnimationCreator } from './creators/jello';
import { TadaAnimationCreator } from './creators/tada';
import { SwingAnimationCreator } from './creators/swing';

import { TransitionDirectiveHandlerCompact } from './directive/transition';
import { AnimateDirectiveHandlerCompact } from './directive/animate';

import { AnimationMagicHandlerCompact } from './magic/animation';

import { AnimationSceneActElementCompact } from './components/act';
import { AnimationElementCompact } from './components/animation';
import { AnimationCollectElementCompact } from './components/collect';
import { AnimateContentElementCompact } from './components/content';
import { AnimationNullElementCompact } from './components/null';
import { AnimationOpacityElementCompact } from './components/opacity';
import { AnimationRotateElementCompact } from './components/rotate';
import { AnimationScaleElementCompact } from './components/scale';
import { AnimationSceneElementCompact } from './components/scene';
import { AnimationSharedElementCompact } from './components/shared';
import { AnimationSliceElementCompact } from './components/slice';
import { AnimationTranslateElementCompact } from './components/translate';

import { AnimationShakeElementCompact } from './components/shake';
import { AnimationVibrateElementCompact } from './components/vibrate';
import { AnimationPulseElementCompact } from './components/pulse';
import { AnimationHeartbeatElementCompact } from './components/heartbeat';
import { AnimationJelloElementCompact } from './components/jello';
import { AnimationRubberbandElementCompact } from './components/rubberband';
import { AnimationSwingElementCompact } from './components/swing';
import { AnimationTadaElementCompact } from './components/tada';

import { TransitionElementCompact } from './components/transition';
import { EaseElementCompact } from './components/ease';
import { EaseBezierElementCompact } from './components/bezier';
import { CompositeEaseElementCompact } from './components/composite-ease';

export function InlineJSAnimation(){
    WaitForGlobal().then(() => {
        let concept = new AnimationConcept(), easings = concept.GetEaseCollection(), actors = concept.GetActorCollection(), creators = concept.GetCreatorCollection();
    
        let addEase = (info: IAnimationEaseCallbackDetails) => easings.Add(info.callback, info.name);
        let addActor = (info: IAnimationActorCallbackDetails) => actors.Add(info.callback, info.name);
        let addCreator = (name: string, callback: AnimationCreatorCallbackType) => creators.Add(name, callback);
        
        addEase(BackAnimationEase);
        addEase(BackInAnimationEase);
        addEase(BackOutAnimationEase);
        addEase(BackInOutAnimationEase);
    
        addEase(BounceAnimationEase);
        addEase(BounceInAnimationEase);
        addEase(BounceOutAnimationEase);
        addEase(BounceInOutAnimationEase);
    
        addEase(CircleAnimationEase);
        addEase(CircleInAnimationEase);
        addEase(CircleOutAnimationEase);
        addEase(CircleInOutAnimationEase);
    
        addEase(CubicAnimationEase);
        addEase(CubicInAnimationEase);
        addEase(CubicOutAnimationEase);
        addEase(CubicInOutAnimationEase);
    
        addEase(ElasticAnimationEase);
        addEase(ElasticInAnimationEase);
        addEase(ElasticOutAnimationEase);
        addEase(ElasticInOutAnimationEase);
    
        addEase(ExponentialAnimationEase);
        addEase(ExponentialInAnimationEase);
        addEase(ExponentialOutAnimationEase);
        addEase(ExponentialInOutAnimationEase);
    
        addEase(QuadraticAnimationEase);
        addEase(QuadraticInAnimationEase);
        addEase(QuadraticOutAnimationEase);
        addEase(QuadraticInOutAnimationEase);
    
        addEase(QuartAnimationEase);
        addEase(QuartInAnimationEase);
        addEase(QuartOutAnimationEase);
        addEase(QuartInOutAnimationEase);
    
        addEase(QuintAnimationEase);
        addEase(QuintInAnimationEase);
        addEase(QuintOutAnimationEase);
        addEase(QuintInOutAnimationEase);
    
        addEase(SineAnimationEase);
        addEase(SineInAnimationEase);
        addEase(SineOutAnimationEase);
        addEase(SineInOutAnimationEase);
    
        addEase(DefaultAnimationEase);
        addEase(LinearAnimationEase);
    
        addActor(DefaultAnimationActor);
        addActor(NullAnimationActor);
        addActor(OpacityAnimationActor);
    
        addActor(WidthAnimationActor);
        addActor(HeightAnimationActor);
        addActor(ZoomAnimationActor);
    
        addActor(SlideDownAnimationActor);
        addActor(SlideLeftAnimationActor);
        addActor(SlideRightAnimationActor);
        addActor(SlideUpAnimationActor);
    
        addActor(SpinAnimationActor);
        addActor(FlipAnimationActor);
        addActor(TossAnimationActor);
    
        addActor(PulseAnimationActor);
        addActor(HeartbeatAnimationActor);
    
        addCreator('bezier', BezierAnimationEaseCreator);
        
        addCreator('scale', ScaleAnimationCreator);
        addCreator('translate', TranslateAnimationCreator);
        addCreator('rotate', RotateAnimationCreator);
        addCreator('scene', SceneAnimationCreator);
    
        addCreator('shake', ShakeAnimationCreator);
        addCreator('vibrate', VibrateAnimationCreator);
        addCreator('rubberband', RubberbandAnimationCreator);
        addCreator('jello', JelloAnimationCreator);
        addCreator('tada', TadaAnimationCreator);
        addCreator('swing', SwingAnimationCreator);
        
        GetGlobal().SetConcept('animation', concept);
        
        TransitionDirectiveHandlerCompact();
        AnimateDirectiveHandlerCompact();
        AnimationMagicHandlerCompact();

        AnimationSceneActElementCompact();
        AnimationElementCompact();
        AnimationCollectElementCompact();
        AnimateContentElementCompact();
        AnimationNullElementCompact();
        AnimationOpacityElementCompact();
        AnimationRotateElementCompact();
        AnimationScaleElementCompact();
        AnimationSceneElementCompact();
        AnimationSharedElementCompact();
        AnimationSliceElementCompact();
        AnimationTranslateElementCompact();

        AnimationShakeElementCompact();
        AnimationVibrateElementCompact();
        AnimationPulseElementCompact();
        AnimationHeartbeatElementCompact();
        AnimationJelloElementCompact();
        AnimationRubberbandElementCompact();
        AnimationSwingElementCompact();
        AnimationTadaElementCompact();
        
        TransitionElementCompact();
        EaseElementCompact();
        EaseBezierElementCompact();
        CompositeEaseElementCompact();
    });
}

import { deepMerge } from '@lightweight-ui/shared'
import { SliderOptions } from './options'
import type { ISliderOptions } from './options'

export enum SliderHooks {
  CREATED = 'created',
}

export class Slider {
  private slider!: Element
  private options!: ISliderOptions
  private slides: Element[] = []
  private currentIndex = 0

  constructor(mount: string, options = {} as ISliderOptions) {
    this.options = deepMerge<ISliderOptions>([SliderOptions, options])
    const slider = document.querySelector(mount)

    if (slider) {
      this.slider = slider
      this.init()
    }
  }

  private init() {
    this.slides = Array.from(this.slider.children)

    this.callHook(SliderHooks.CREATED)
  }

  private callHook(hook: SliderHooks) {
    console.log(hook)
  }

  public nextSlide() {}

  public prevSlide() {}
}

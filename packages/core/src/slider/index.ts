import { deepMerge } from '@lightweight-ui/utils'
import { SliderOptions } from './options'
import { SliderHooks } from './types'
import type { ISliderOptions } from './options'

export default class Slider {
  private slider!: Element
  private options!: ISliderOptions
  private slides: Element[] = []
  private currentIndex = 0

  constructor(mount: string, options = {} as ISliderOptions) {
    this.options = deepMerge<ISliderOptions>([SliderOptions, options])
    const slider = document.querySelector(mount)

    if (slider) {
      this.slider = slider
      this.#init()
    }
  }

  #init() {
    this.slides = Array.from(this.slider.children)

    this.#callHook(SliderHooks.CREATED)
  }

  #callHook(hook: SliderHooks) {
    console.log(hook)
  }

  nextSlide() {}

  prevSlide() {}
}

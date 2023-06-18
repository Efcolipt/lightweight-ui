import { deepMerge } from '@lightweight-ui/utils'
import { ISliderOptions, SliderOptions } from './options'
import { SliderHooks } from './types'

export default class Slider {
  #slider: Element
  #options: ISliderOptions = SliderOptions
  #slides: Element[] = []
  #currentIndex = 0

  constructor(mount: string, options = {} as ISliderOptions) {
    this.#options = deepMerge<ISliderOptions>([options])
    const slider = document.querySelector(mount)

    if (slider) {
      this.#slider = slider
      this.#init()
    }
  }

  #init() {
    this.#currentIndex = 0
    this.#slides = Array.from(this.#slider.children)

    this.#callHook(SliderHooks.CREATED)
  }

  #callHook(hook: SliderHooks) {
    console.log(hook)
  }

  #nextTick() {}

  nextSlide() {}

  prevSlide() {}
}

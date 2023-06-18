import { deepMerge } from '@lightweight-ui/shared'
import { SliderHooks, SliderOptions } from './types'

export default class Slider {
  private slider!: Element
  private options!: typeof SliderOptions
  private slides: Element[] = []
  private currentIndex = 0

  constructor(mount: string, options = {} as typeof SliderOptions) {
    this.options = deepMerge<typeof SliderOptions>([SliderOptions, options])
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

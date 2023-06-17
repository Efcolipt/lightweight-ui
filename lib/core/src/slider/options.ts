const SliderOptions = {
  /**
   * @description Enables autoplay
   * @default false
   */
  autoplay: false,

  /**
   * @description Autoplay speed
   * @default 1000
   */
  autoplaySpeed: 1000,

  /**
   * @description Loop slider
   * @default true
   */
  loop: true,
}

type ISliderOptions = typeof SliderOptions

export { ISliderOptions, SliderOptions }

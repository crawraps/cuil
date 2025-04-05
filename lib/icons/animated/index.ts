export { default as defineAnimatedIcon } from './base'
export { default as defineFullscreenAnimatedIcon } from './fullscreen'
export { default as defineEyeAnimatedIcon } from './eye'

import defineAnimatedIcon from './base'
import defineFullscreenAnimatedIcon from './fullscreen'
import defineEyeAnimatedIcon from './eye'

export default function initAnimatedIconsPack() {
  defineAnimatedIcon()

  defineFullscreenAnimatedIcon()
  defineEyeAnimatedIcon()
}

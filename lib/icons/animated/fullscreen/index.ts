import { AnimatedIcon } from '../base'

class FullscreenAnimatedIcon extends AnimatedIcon {
  static observedAttributes = [...AnimatedIcon.observedAttributes, 'state']

  connectedCallback(): void {
    this.config = {
      animation: new URL('./fullscreen.lottie', import.meta.url).href,
      hover: [3, 5],
    }
    super.connectedCallback()
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
    super.attributeChangedCallback(name, oldValue, newValue)

    switch (name) {
      case 'state': {
        if (newValue === 'maximized') {
          this.config = {
            ...this.config,
            idle: [3, 14],
          }
          this.attributeChangedCallback('hover-frames', '', '16,19')
        } else if (newValue === 'minimized') {
          this.config = {
            ...this.config,
            hover: [3, 5],
            idle: [16, 28],
          }
          this.attributeChangedCallback('hover-frames', '', '3,5')
        }

        this.setAttribute('idle-playing', '')
        break
      }
    }
  }
}

export default function init() {
  if (!window) throw new Error('Window is not defined')
  if (!window.customElements) throw new Error('Custom Elements are not supported in this browser')

  window.customElements.define('cuil-animated-icon-fullscreen', FullscreenAnimatedIcon)
}

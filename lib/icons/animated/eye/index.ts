import { AnimatedIcon } from '../base'

class EyeAnimatedIcon extends AnimatedIcon {
  static observedAttributes = [...AnimatedIcon.observedAttributes, 'state']

  connectedCallback(): void {
    this.config = {
      animation: new URL('./eye.lottie', import.meta.url).href,
      hover: [4, 7],
      idle: [11, 48],
    }
    super.connectedCallback()
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
    super.attributeChangedCallback(name, oldValue, newValue)

    switch (name) {
      case 'state': {
        if (newValue === 'closed') {
          this.config = {
            ...this.config,
            idle: [7, 11],
          }
          this.attributeChangedCallback('hover-frames', '', '')
        } else if (newValue === 'opened') {
          this.config = {
            ...this.config,
            idle: [11, 48],
          }
          this.attributeChangedCallback('hover-frames', '', '4,7')
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

  window.customElements.define('cuil-animated-icon-eye', EyeAnimatedIcon)
}

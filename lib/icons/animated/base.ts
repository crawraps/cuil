import { DotLottieWorker } from '@lottiefiles/dotlottie-web'
import type { Mode } from '@lottiefiles/dotlottie-web'

const modes: Mode[] = ['forward', 'reverse', 'bounce', 'reverse-bounce']

interface AnimatedIconConfig {
  animation?: string
  hover?: (number | undefined)[]
  active?: (number | undefined)[]
  idle?: (number | undefined)[]
}

export class AnimatedIcon extends HTMLElement {
  protected config: AnimatedIconConfig = {}

  private canvas?: HTMLCanvasElement
  private lottie?: DotLottieWorker
  private hoverStagePlayed = false
  private hoverHandlers: ((ev: MouseEvent) => void)[] = []

  static observedAttributes = ['playing', 'speed', 'loop', 'frame', 'disable-interpolation', 'mode', 'hover-frames', 'active-frames', 'idle-frames', 'idle-playing']

  connectedCallback() {
    const shadow = this.createShadow()
    this.canvas = this.createCanvas()
    shadow.appendChild(this.canvas)

    this.loadAnimation()

    this.updateHoverHandlers()
  }

  disconnectedCallback() {
    if (this.lottie) this.lottie.destroy()
  }

  attributeChangedCallback(name: string, _: string, newValue: string) {
    if (!this.lottie) return

    switch (name) {
      case 'playing': {
        if (newValue !== null) {
          this.lottie.play()
        } else {
          this.lottie.pause()
        }
        break
      }
      case 'idle-playing': {
        if (newValue !== null) {
          this.playIdle()
        }
        break
      }
      case 'speed': {
        const speed = Number.parseFloat(newValue)
        if (Number.isNaN(speed)) {
          this.lottie.setSpeed(1)
        }

        this.lottie.setSpeed(speed)
        break
      }
      case 'loop': {
        this.lottie.setLoop(newValue !== null)
        break
      }
      case 'frame': {
        const frame = Number.parseInt(newValue)
        if (Number.isNaN(frame)) {
          this.lottie.setFrame(0)
        }

        this.lottie.setFrame(frame)
        break
      }
      case 'disable-interpolation': {
        if (newValue === null) this.lottie.setUseFrameInterpolation(true)
        else this.lottie.setUseFrameInterpolation(false)
        break
      }
      case 'mode': {
        if (newValue === null) return
        if (newValue !== null && !modes.includes(newValue as Mode)) {
          throw new Error(`Invalid mode ${newValue}`)
        }
        this.lottie.setMode(newValue as Mode)
        break
      }
      case 'hover-frames': {
        const frames = newValue.split(',').map(s => s.trim())
        this.updateFrames(frames[0], 'hover', 0)
        this.updateFrames(frames[1], 'hover', 1)

        this.hoverStagePlayed = false
        this.removeEventListener('mouseenter', this.hoverHandlers[0])
        this.removeEventListener('mouseleave', this.hoverHandlers[1])
        this.hoverHandlers = []
        this.updateHoverHandlers()
        break
      }
      case 'active-frames': {
        const frames = newValue.split(',').map(s => s.trim())
        this.updateFrames(frames[0], 'active', 0)
        this.updateFrames(frames[1], 'active', 1)
        break
      }
      case 'idle-frames': {
        const frames = newValue.split(',').map(s => s.trim())
        this.updateFrames(frames[0], 'idle', 0)
        this.updateFrames(frames[1], 'idle', 1)
        break
      }
    }
  }

  private loadAnimation() {
    if (!this.canvas) return

    if (!this.config.animation) {
      this.config.animation = this.getAttribute('animation') ?? ''
      if (this.config.animation.match(/\.(lottie|json)$/)) {
        throw new Error('You must provide valid animation URL')
      }
    }

    this.lottie = new DotLottieWorker({
      canvas: this.canvas,
      src: this.config.animation,
      speed: Number.parseFloat(this.getAttribute('speed') ?? '1') || 1,
      loop: this.hasAttribute('loop'),
      autoplay: this.hasAttribute('playing'),
      mode: this.getAttribute('mode') as Mode | undefined,
      useFrameInterpolation: !this.hasAttribute('disable-interpolation'),
      renderConfig: {
        autoResize: true,
      },
      workerId: this.config.animation,
    })

    const removePlaying = () => this.removeAttribute('playing')

    this.lottie.addEventListener('load', () => {
      this.initEvents()
    })

    this.lottie.addEventListener('pause', removePlaying)
    this.lottie.addEventListener('stop', removePlaying)

    this.lottie.addEventListener('complete', () => {
      if (this.hasAttribute('idle-playing')) this.removeAttribute('idle-playing')
      removePlaying()
    })
  }

  private createShadow() {
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.innerHTML = `
      <style>
        :host {
          display: block;
          width: 120px;
          height: 120px;
        }
      </style>
    `

    return shadow
  }

  private createCanvas() {
    const canvas = document.createElement('canvas')

    canvas.style.width = '100%'
    canvas.style.height = '100%'

    return canvas
  }

  private updateFrames(value: string, type: 'hover' | 'active' | 'idle', ind: 0 | 1) {
    const frame = Number.parseInt(value)
    if (!this.config[type]) this.config[type] = []

    if (Number.isNaN(frame)) {
      this.config[type][ind] = undefined
      return
    }

    this.config[type][ind] = frame
  }

  private updateHoverHandlers() {
    const startFrame = this.config.hover?.[0]
    const endFrame = this.config.hover?.[1]

    if (!this.config.hover || startFrame === undefined || endFrame === undefined) {
      this.removeEventListener('mouseenter', this.hoverHandlers[0])
      this.removeEventListener('mouseleave', this.hoverHandlers[1])
      this.hoverHandlers = []
      return
    }

    const enter = () => {
      if (!this.lottie) return
      if (this.hasAttribute('idle-playing') || this.hoverStagePlayed) return

      this.lottie.setSegment(startFrame, endFrame)
      this.setAttribute('mode', 'forward')
      this.setAttribute('playing', '')
      this.hoverStagePlayed = true
    }

    const leave = () => {
      if (!this.lottie) return
      if (this.hasAttribute('idle-playing') || !this.hoverStagePlayed) return

      this.lottie.setSegment(startFrame, endFrame)
      this.setAttribute('mode', 'reverse')
      this.setAttribute('playing', '')
      this.hoverStagePlayed = false
    }

    this.addEventListener('mouseenter', enter)
    this.addEventListener('mouseleave', leave)
    this.hoverHandlers.push(enter, leave)
  }

  private playIdle() {
    const startFrame = this.config.idle?.[0]
    const endFrame = this.config.idle?.[1]

    if (!this.config.idle || startFrame === undefined || endFrame === undefined) {
      return
    }

    if (!this.lottie) return

    this.lottie.setSegment(startFrame, endFrame)
    this.setAttribute('playing', '')

    return true
  }

  private initEvents() {
    if (!this.lottie) return

    this.lottie.addEventListener('load', () =>
      this.dispatchEvent(
        new CustomEvent('lottieload', {
          bubbles: true,
          cancelable: true,
        }),
      ),
    )

    this.lottie.addEventListener('complete', () =>
      this.dispatchEvent(
        new CustomEvent('animationcomplete', {
          bubbles: true,
          cancelable: true,
        }),
      ),
    )

    this.lottie.addEventListener('pause', () =>
      this.dispatchEvent(
        new CustomEvent('animationpause', {
          bubbles: true,
          cancelable: true,
        }),
      ),
    )

    this.lottie.addEventListener('stop', () =>
      this.dispatchEvent(
        new CustomEvent('animationstop', {
          bubbles: true,
          cancelable: true,
        }),
      ),
    )
  }
}

export default function init() {
  if (!window) throw new Error('Window is not defined')
  if (!window.customElements) throw new Error('Custom Elements are not supported in this browser')

  window.customElements.define('cuil-animated-icon', AnimatedIcon)
}

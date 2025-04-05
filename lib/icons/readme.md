# Icons

A collection of icons

Animated icons are supported by [lottie](https://lottiefiles.com/) technology. 

## Animated icons

An animated icons is a custom html component. There are the base icon and prebuilt ones.
Every prebuilt icon is a separate custom html component. You can find a list of prebuilt icons below or run the dev server and view every one of them there.

To use following elements they should be defined in a document.
To define the base animated icon use `defineAniamtedIcon()` function, and for a prebuilt icon use the corresponding function.

### Base animated icon

Custom html component for the base animated icon is `<cuil-animated-icon />`. It's configurable through attributes:

### Prebuilt animated icons

Currently available icons:

- `<cuil-animated-icon-eye />` - can be defined via `defineEyeAnimatedIcon()`
- `<cuil-animated-icon-fullscreen />` - can be defined via `defineFullscreenAnimatedIcon()`

### Attributes

- animation - path to .lottie of .json file containing animation. This attribute is required for base animated icon and should not be used in a prebuilt animated icon.
- playing - controls whenever animation is playing. This value will change throughout the animation sequence by component itself.
- speed - speed of the animation. Default: 1
- loop - should the animation or a segment be looped. Default: false
- frame - controls current animation frame. Default: null
- disable-interpolation - disable animation interpolation. Deafult: null
- mode - the animation or a segment playing mode. Available values: 'forward', 'reverse', 'bounce', 'reverse-bounce'. Default: 'forward'. This value will change throughout the animation sequence by component itself.
- idle-frames - a segment of the animation to be played after a hover event ending. The value should be formatted as `0, 53`, where 0 is the start of a idle segment and 53 is the end of it. Default value is null for the base animted icon and predefined for prebuilt ones.
- hover-frames - a segment of the animation to be played on hover event. The value should be formatted as `0, 53`, where 0 is the start of a hover segment and 53 is the end of it. Default value is null for the base animted icon and predefined for prebuilt ones.
- idle-playing - controls whenever the idle segment of the animation is playing. This value will change throughout the animation sequence by component itself.

## Build

### Stylesheet mode

To build the result stylesheet you need to run `build-icons` script. 

```console
$ npm run build-css
```

You can find the result .css file named `index.css` in the ./dist directory.

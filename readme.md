# Crawraps' user interface library

## Overview

Yet another UI library that I'm going to use in my projects

## Development

A preview sheet of different UI elements is available. To view it just run the dev server and open `localhost:3000`

```console
$ npm run dev
```

## Build

### Stylesheet mode

Currently, only pure CSS styling is supported and implemented. To build the result stylesheet you need to run `build-css` script. 

```console
$ npm run build-css
```

You can find the result .css file named `cuil.css` in the ./dist directory.

#### Configuration

You can configure the result by passing environment variables to the command:

1. PREFIX=""

    By default library's styles will be applied to all html tags that are currently supported.
    If you want to use specific styles on specific elements you can set a prefix to all selectors.
    This will result in creating new classes instead of styling native elements following the pattern `.prefix-tagname`.
    
    ```css
    /* cuil.css */

    /* PREFIX="" */
    h1 {
      font-weight: 600;
      font-size: 2.5em;
    }

    /* PREFIX="cuil" */
    .cuil-h1 {
      font-weight: 600;
      font-size: 2.5em;
    }

    ```

2. INCLUDE_FONTS="true"

    By default library uses 3 different fonts.
    You can make them to be parsed from [Google Fonts](https://fonts.google.com/) in the final .css file.
    This option is true by default

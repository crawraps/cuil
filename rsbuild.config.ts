import { defineConfig } from '@rsbuild/core'
import { pluginSass } from '@rsbuild/plugin-sass'

export default defineConfig(({ env }) => {
  const cssOnly = {
    enabled: Boolean(process.env.CSS_ONLY) || undefined,
    prefix: process.env.PREFIX || '',
    includeFonts: process.env.INCLUDE_FONTS !== 'false',
  }

  return {
    source: {
      entry: cssOnly.enabled && {
        cssOnly: './src/css-only.ts',
      },
    },
    output: {
      filename: {
        css: () => {
          if (cssOnly.enabled) return 'cuil.css'
          return env === 'production' ? '[name].[contenthash:8].css' : '[name].css'
        },
      },
      distPath: {
        css: cssOnly.enabled && './',
      },
    },
    plugins: [
      pluginSass({
        sassLoaderOptions: {
          additionalData: env === 'development' || cssOnly.enabled ? `$prefix: "${cssOnly.prefix}";${cssOnly.includeFonts ? '@import "./fonts";' : ''}` : undefined,
        },
      }),
    ],
  }
})

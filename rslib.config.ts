import { pluginSass } from '@rsbuild/plugin-sass'
import { defineConfig } from '@rslib/core'

type BuildPackage = 'css' | 'icons'

const packages: { [key in BuildPackage]: string } = {
  icons: './lib/icons',
  css: './lib/css',
}

export default defineConfig(({ env }) => {
  const buildPackage = process.env.PACKAGE as BuildPackage | undefined
  const cssOnly = {
    enabled: buildPackage === 'css' || undefined,
    prefix: process.env.PREFIX || '',
    includeFonts: process.env.INCLUDE_FONTS !== 'false',
  }

  return {
    lib: [
      {
        format: 'esm',
        dts: !cssOnly.enabled && { bundle: true },
      },
      {
        format: 'cjs',
      },
    ],
    source: {
      assetsInclude: /\.lottie$/,
      entry: (() => {
        if (!buildPackage) {
          return {
            index: './src/index.ts',
          }
        }

        return {
          index: `${packages[buildPackage]}/index.ts`,
        }
      })(),
    },
    output: {
      target: env === 'development' || cssOnly.enabled ? 'web' : 'node',
      minify: cssOnly.enabled,
      filenameHash: false,
      copy: buildPackage && [
        {
          from: `${packages[buildPackage]}/package.json`,
        },
      ],
      distPath:
        buildPackage === 'icons'
          ? {
              assets: './',
            }
          : undefined,
    },
    tools: {
      rspack(config) {
        return {
          ...config,
          module: {
            ...config.module,
            rules: [
              ...(config.module?.rules ?? []),
              {
                test: /\.lottie$/,
                type: 'asset/resource',
              },
            ],
          },
        }
      },
    },
    plugins: [
      pluginSass({
        sassLoaderOptions: {
          additionalData: `$prefix: "${cssOnly.prefix}";${cssOnly.includeFonts ? '@import "./fonts";' : ''}`,
        },
      }),
    ],
  }
})

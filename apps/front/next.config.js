const path = require('path') // eslint-disable-line @typescript-eslint/no-var-requires

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  transpilePackages: ['ui'],
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      lib: path.resolve('lib'),
      features: path.resolve('features'),
    }

    return config
  },
}

module.exports = nextConfig

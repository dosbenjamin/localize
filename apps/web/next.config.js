import path from 'path'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  transpilePackages: ['@localize/ui'],
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve('components'),
      features: path.resolve('features'),
      lib: path.resolve('lib'),
    }

    return config
  },
}

export default nextConfig

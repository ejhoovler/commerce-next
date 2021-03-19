const withSass = require('@zeit/next-sass')

module.exports = withSass({
  webpack: config => {
    config.node = {
      fs: 'empty'
    }
    return config
  },
  env: {
    'NEXT_PUBLIC_CHEC_PUBLIC_KEY': process.env.NEXT_PUBLIC_CHEC_PUBLIC_KEY
  }
})


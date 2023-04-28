module.exports = function (api) {
    return {
      plugins: ['macros'],
    }
  }

  module.exports = {
    'fontawesome-svg-core': {
      'license': 'free'
    }
  }

  module.exports = {
    presets: [
      '@babel/preset-env',
      ['@babel/preset-react', {runtime: 'automatic'}],
    ],
  };
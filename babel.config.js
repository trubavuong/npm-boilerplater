module.exports = (api) => (
  api.env('test')
    ? {
      retainLines: true,
      presets: ['@babel/preset-env'],
      plugins: ['@babel/plugin-transform-runtime'],
    }
    : {
      presets: ['@babel/preset-env'],
      plugins: ['@babel/plugin-transform-runtime'],
    }
);

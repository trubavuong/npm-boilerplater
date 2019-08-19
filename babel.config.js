module.exports = (api) => (
  api.env('test')
    ? { retainLines: true, presets: ['@babel/env'] }
    : { presets: ['@babel/env'] }
);

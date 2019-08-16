module.exports = (api) => {
  const isTest = api.env('test');
  return {
    ...(isTest ? { retainLines: true } : {}),
    presets: [['@babel/env', { corejs: 3, useBuiltIns: 'usage' }]],
  };
};

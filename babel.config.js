module.exports = (api) => {
  const envPreset = ['@babel/env', { corejs: 3, useBuiltIns: 'usage' }];
  return (api.env('test') ? { retainLines: true, presets: [envPreset] } : { presets: [envPreset] });
};

module.exports = (api) => {
  const presets = [['@babel/env', { corejs: 3, useBuiltIns: 'usage' }]];

  const envConfigs = {};
  if (api.env('test')) {
    envConfigs.retainLines = true;
  }

  return Object.assign({}, { presets }, envConfigs);
};

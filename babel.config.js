module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            data: './src/data',
            domain: './src/domain',
            infra: './src/infra',
            main: './src/main',
            presentation: './src/presentation',
          },
        },
      ],
    ],
  };
};

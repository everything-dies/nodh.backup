module.exports = function(api) {
  api.cache(true);

  return {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }],
      '@babel/preset-react',
    ],
    plugins: [
      [
        'module-resolver',
        {
          root: ['src'],
        },
      ],
    ],
  };
};

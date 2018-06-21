module.exports = api => ({
  presets: [
    [
      '@4c/4catalyzer',
      {
        target: 'web',
        runtime: true,
        modules: api.env() === 'esm' ? false : 'commonjs',
      },
    ],
  ],
});

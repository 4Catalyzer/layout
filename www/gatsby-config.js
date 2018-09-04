module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-css-literal-loader',
      options: { extension: '.module.scss' },
    },
  ],
};

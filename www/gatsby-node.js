exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        'react-hot-loader': require.resolve('react-hot-loader'),
      },
    },
  });
};

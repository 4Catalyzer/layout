import React from 'react';

import Layout from '../../../src/css-modules';

// eslint-disable-next-line
const styles = css`
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;

const propTypes = {};

const Box = ({ children, style, ...props }) => (
  <div
    {...props}
    style={{ ...style, backgroundColor: '#CCC', border: '1px solid black' }}
  >
    {children || 'box'}
  </div>
);

function Page() {
  return (
    <div style={{ padding: 60 }}>
      <p>hello world</p>

      <Layout direction="column" pad={6}>
        <Layout.Flex pad="3" as={Box} direction="column">
          <Layout.Block>
            This is a block <div>foo</div>
          </Layout.Block>

          <Layout.Flex pad="2">
            <Box />
            <Box />
            <Box />
          </Layout.Flex>
        </Layout.Flex>
        <Box style={{ width: 250 }}>
          <Layout grow pad={4} wrap justify="center">
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
          </Layout>
        </Box>
      </Layout>
    </div>
  );
}

Page.propTypes = propTypes;

export default Page;

import React from 'react';
import Layout from '../../../';

const propTypes = {};

const Box = ({ children, ...props }) => (
  <div
    {...props}
    style={{ backgroundColor: '#CCC', border: '1px solid black' }}
  >
    {children || 'box'}
  </div>
);

function Page() {
  return (
    <div>
      <p>hello world</p>
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
    </div>
  );
}

Page.propTypes = propTypes;

export default Page;

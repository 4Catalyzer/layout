import PropTypes from 'prop-types';
import React from 'react';

import { propTypes, defaultProps } from '../PropTypes';
import styles from './Layout.module.css';
import Flex from './Flex';
import Block from './Block';

function Layout({ display, ...props }, ref) {
  if (display === 'block') return Block.render(props, ref);

  return Flex.render(props, ref);
}

const DecoratedLayout = React.forwardRef(Layout);

DecoratedLayout.propTypes = {
  ...propTypes,
  display: PropTypes.oneOf(['flex', 'block']),
};

DecoratedLayout.defaultProps = defaultProps;

DecoratedLayout.Flex = Flex;
DecoratedLayout.Block = Block;

DecoratedLayout.Spacer = () => <div className={styles.spacer} />;

export default DecoratedLayout;

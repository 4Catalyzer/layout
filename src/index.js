import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { defaultProps, propTypes } from './PropTypes';

import styles from './Layout.scss';

const Block = React.forwardRef(
  (
    {
      as: Component,
      direction: _d,
      reverse: _r,
      pad: _p,
      wrap: _w,
      grow,
      inline,
      flex,
      align: _a,
      alignSelf,
      alignContent: _aC,
      justify: _j,
      className,
      style,
      ...props
    },
    ref,
  ) => {
    let flexValue = flex === true ? '1' : flex;
    if (grow && flexValue == null) {
      flexValue = '1 0 auto';
    }

    return (
      <Component
        {...props}
        ref={ref}
        style={{
          ...style,
          '--fcl-d': inline ? 'inline-block' : 'block',
          '--fcl-as': alignSelf,
          '--fcl-f': flexValue,
        }}
        className={classNames(className, styles.layout)}
      />
    );
  },
);

Block.displayName = 'Block';
Block.propTypes = propTypes;
Block.defaultProps = defaultProps;

const Flex = React.forwardRef(
  (
    {
      as: Component,
      direction,
      reverse,
      pad,
      wrap,
      grow,
      inline,
      flex,
      align,
      alignSelf,
      alignContent,
      justify,
      className,
      style,
      ...props
    },
    ref,
  ) => {
    let flexValue = flex === true ? '1' : flex;
    if (grow && flexValue == null) {
      flexValue = '1 0 auto';
    }

    return (
      <Component
        {...props}
        ref={ref}
        style={{
          ...style,
          '--fcl-d': inline ? 'inline-flex' : 'flex',
          '--fcl-a': align,
          '--fcl-ac': alignContent,
          '--fcl-as': alignSelf,
          '--fcl-jc': justify,
          '--fcl-w': wrap ? 'wrap' : undefined,
          '--fcl-f': flexValue,
        }}
        className={classNames(
          className,
          styles.layout,
          direction && styles[direction],
          reverse && styles.reverse,
          pad != null && styles[`pad-${pad === true ? '3' : pad}`],
          wrap && styles.wrap,
        )}
      >
        {props.children}
      </Component>
    );
  },
);

Flex.displayName = 'Flex';
Flex.propTypes = propTypes;
Flex.defaultProps = defaultProps;

const Layout = React.forwardRef(({ display, ...props }, ref) => {
  if (display === 'block') return Block.render(props, ref);

  return Flex.render(props, ref);
});

Layout.displayName = 'Layout';
Layout.propTypes = {
  ...propTypes,
  display: PropTypes.oneOf(['flex', 'block']),
};

Layout.defaultProps = defaultProps;

Layout.Flex = Flex;
Layout.Block = Block;

Layout.Spacer = () => <div className={styles.spacer} />;

export default Layout;

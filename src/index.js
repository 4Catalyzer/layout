import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './Layout.css';
import { defaultProps, propTypes } from './PropTypes';

export const Spacing = {
  1: 'var(--fcl-p-1, 4px)',
  2: 'var(--fcl-p-2, 8px)',
  3: 'var(--fcl-p-3, 12px)',
  4: 'var(--fcl-p-4, 16px)',
  5: 'var(--fcl-p-5, 20px)',
  6: 'var(--fcl-p-6, 24px)',
  8: 'var(--fcl-p-8, 32px)',
  10: 'var(--fcl-p-10, 40px)',
  12: 'var(--fcl-p-12, 48px)',
  16: 'var(--fcl-p-16, 64px)',
  20: 'var(--fcl-p-20, 80px)',
  24: 'var(--fcl-p-24, 96px)',
  32: 'var(--fcl-p-32, 128px)',
  40: 'var(--fcl-p-40, 160px)',
  48: 'var(--fcl-p-48, 192px)',
  56: 'var(--fcl-p-56, 224px)',
  64: 'var(--fcl-p-64, 256px)',
};

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
    if (grow && flexValue != null) {
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
    if (grow && flexValue != null) {
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

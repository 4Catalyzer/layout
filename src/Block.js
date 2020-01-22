/* eslint-disable react/prop-types */

import classNames from 'classnames';
import React from 'react';
import styles from './Layout.module.css';
import { defaultProps, propTypes } from './PropTypes';

function Block(
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
) {
  const combinedStyle =
    style || flex != null
      ? { ...style, flex: flex === true ? 1 : flex }
      : style;

  return (
    <Component
      {...props}
      ref={ref}
      style={combinedStyle}
      className={classNames(
        className,
        grow && styles.grow,
        inline ? styles.blockInline : styles.block,
        alignSelf && styles[alignSelf],
      )}
    />
  );
}

const DecoratedBlock = React.forwardRef(Block);
DecoratedBlock.propTypes = propTypes;
DecoratedBlock.defaultProps = defaultProps;

export default DecoratedBlock;

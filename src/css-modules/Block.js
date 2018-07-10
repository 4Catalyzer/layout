import React from 'react';
import classNames from 'classnames';

/* eslint-disable react/prop-types */
import styles from './Layout.module.css';
import { propTypes, defaultProps } from '../PropTypes';
import camelCase from './camelCase';

function Block(
  {
    className,
    style,
    inline,
    alignSelf,
    grow,
    flex,
    as: Component,
    direction: _1,
    align: _2,
    justify: _3,
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
        inline ? styles.blockInline : styles.block,
        grow && styles.grow,
        alignSelf && styles[camelCase(alignSelf)],
      )}
    />
  );
}

const DecoratedBlock = React.forwardRef(Block);
DecoratedBlock.propTypes = propTypes;
DecoratedBlock.defaultProps = defaultProps;

export default DecoratedBlock;

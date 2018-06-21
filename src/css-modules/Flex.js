/* eslint-disable react/prop-types */
import React from 'react';
import classNames from 'classnames';

import styles from './Layout.module.css';
import { propTypes, defaultProps } from '../PropTypes';
import camelCase from './camelCase';

function Flex(
  {
    className,
    style,
    direction,
    pad,
    grow,
    flex,
    wrap,
    inline,
    alignSelf,
    align,
    justify,
    as: Component,
    ...props
  },
  ref,
) {
  return (
    <Component
      {...props}
      ref={ref}
      style={{ ...style, flex: flex === true ? 1 : flex }}
      className={classNames(
        className,
        inline ? styles.flexInline : styles.flex,
        pad && styles[`pad${pad === true ? '3' : pad}`],
        grow && styles.grow,
        wrap && styles.wrap,
        align && styles[camelCase(align)],
        alignSelf && styles[camelCase(alignSelf)],
        direction && styles[camelCase(direction)],
        justify && styles[camelCase(justify)],
      )}
    />
  );
}
const DecoratedFlex = React.forwardRef(Flex);
DecoratedFlex.propTypes = propTypes;
DecoratedFlex.defaultProps = defaultProps;

export default DecoratedFlex;

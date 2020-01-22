/* eslint-disable react/prop-types */

import classNames from 'classnames';
import React from 'react';
import styles from './Layout.module.css';
import { defaultProps, propTypes } from './PropTypes';

function Flex(
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
        direction && styles[direction],
        reverse && styles.reverse,
        pad && styles[`pad-${pad === true ? '3' : pad}`],
        wrap && styles.wrap,
        grow && styles.grow,
        inline ? styles.flexInline : styles.flex,
        align && styles[`align-${align}`],
        alignSelf && styles[`self-${alignSelf}`],
        alignContent && styles[`align-content-${alignContent}`],
        justify && styles[`justify-${justify}`],
      )}
    />
  );
}

const DecoratedFlex = React.forwardRef(Flex);
DecoratedFlex.propTypes = propTypes;
DecoratedFlex.defaultProps = defaultProps;

export default DecoratedFlex;

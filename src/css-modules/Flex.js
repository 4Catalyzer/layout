/* eslint-disable react/prop-types */

import classNames from 'classnames';
import React from 'react';

import { propTypes, defaultProps } from '../PropTypes';
import camelCase from './camelCase';
import styles from './Layout.module.css';

function Flex(
  {
    as: Component,
    direction,
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
        direction && styles[camelCase(direction)],
        pad && styles[`pad${pad === true ? '3' : pad}`],
        wrap && styles.wrap,
        grow && styles.grow,
        inline ? styles.flexInline : styles.flex,
        align && styles[camelCase(`align-${align}`)],
        alignSelf && styles[camelCase(`self-${alignSelf}`)],
        alignContent && styles[camelCase(`align-content-${alignContent}`)],
        justify && styles[camelCase(`justify-${justify}`)],
      )}
    />
  );
}

const DecoratedFlex = React.forwardRef(Flex);
DecoratedFlex.propTypes = propTypes;
DecoratedFlex.defaultProps = defaultProps;

export default DecoratedFlex;

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
    alignContent,
    align,
    justify,
    as: Component,
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
        inline ? styles.flexInline : styles.flex,
        grow && styles.grow,
        wrap && styles.wrap,
        pad && styles[`pad${pad === true ? '3' : pad}`],
        align && styles[camelCase(`align-${align}`)],
        alignContent && styles[camelCase(`align-content-${alignContent}`)],
        alignSelf && styles[camelCase(`self-${alignSelf}`)],
        direction && styles[camelCase(direction)],
        justify && styles[camelCase(`justify-${justify}`)],
      )}
    />
  );
}
const DecoratedFlex = React.forwardRef(Flex);
DecoratedFlex.propTypes = propTypes;
DecoratedFlex.defaultProps = defaultProps;

export default DecoratedFlex;

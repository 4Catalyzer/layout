import PropTypes from 'prop-types';

const align = PropTypes.oneOf([
  'start',
  'end',
  'flex-start',
  'flex-end',
  'center',
  'stretch',
  'baseline',
  'first-baseline',
  'last-baseline',
]);

const content = PropTypes.oneOf([
  'left',
  'right',
  'flex-start',
  'flex-end',
  'center',
  'baseline',
  'first-baseline',
  'last-baseline',
  'space-between',
  'space-around',
  'space-evenly',
]);

export const propTypes = {
  as: PropTypes.elementType.isRequired,
  direction: PropTypes.oneOf(['row', 'column']).isRequired,
  pad: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
  ]),
  wrap: PropTypes.bool,
  grow: PropTypes.bool,
  inline: PropTypes.bool,
  flex: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
  ]),
  align: align.isRequired,
  alignSelf: align,
  alignContent: content,
  justify: content.isRequired,
};

export const defaultProps = {
  as: 'div',
  direction: 'row',
  align: 'stretch',
  justify: 'flex-start',
};

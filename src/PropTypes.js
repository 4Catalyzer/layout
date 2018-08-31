import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';

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
  direction: PropTypes.oneOf(['row', 'column']).isRequired,
  as: elementType.isRequired,
  pad: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  wrap: PropTypes.bool,
  grow: PropTypes.bool,
  inline: PropTypes.bool,
  flex: PropTypes.any,
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

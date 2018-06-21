import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';

export const propTypes = {
  direction: PropTypes.oneOf(['row', 'column']).isRequired,
  as: elementType.isRequired,
  pad: PropTypes.bool,
  wrap: PropTypes.bool,
  grow: PropTypes.bool,
  inline: PropTypes.bool,
  flex: PropTypes.any,
  alignSelf: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'stretch']),

  align: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'stretch',
    'baseline',
  ]).isRequired,
  justify: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'space-between',
    'space-around',
  ]).isRequired,
};

export const defaultProps = {
  as: 'div',
  direction: 'row',
  align: 'stretch',
  justify: 'flex-start',
};

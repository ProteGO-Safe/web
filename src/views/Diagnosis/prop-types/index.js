import PropTypes from 'prop-types';

export const choicesPropType = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })
);

const itemsPropType = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    choices: choicesPropType
  })
).isRequired;

export const questionPropType = PropTypes.shape({
  text: PropTypes.string.isRequired,
  items: itemsPropType
}).isRequired;

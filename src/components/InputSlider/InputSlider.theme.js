import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

export const ProteGoSlider = withStyles({
  root: {
    color: '#b7b7b7',
    height: 6
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -9,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit'
    }
  },
  active: {},
  disabled: {
    opacity: 0.4
  },
  valueLabel: {
    left: 'calc(-50% + 4px)'
  },
  mark: {
    height: 0,
    width: 0
  },
  markLabel: {
    top: 52,
    fontFamily: 'Open Sans',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgba(27, 27, 27, 0.87)',
    '&:first-child': {
      left: 0
    }
  },
  track: {
    height: 6,
    borderRadius: 4
  },
  rail: {
    height: 6,
    borderRadius: 4
  }
})(Slider);

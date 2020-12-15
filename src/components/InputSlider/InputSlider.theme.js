import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

export const ProteGoSlider = withStyles({
  root: {
    color: '#b7b7b7',
    height: 5
  },
  thumb: {
    height: 18,
    width: 18,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -7,
    marginLeft: -9,
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
    top: 44,
    fontFamily: 'Open Sans',
    fontSize: 12,
    fontWeight: 600,
    color: 'rgba(27, 27, 27, 0.87)',
    transform: 'translateX(calc(-100% + 9px))',
    '&:nth-child(5)': {
      transform: 'translateX(-9px)'
    }
  },
  track: {
    height: 5,
    borderRadius: 4
  },
  rail: {
    height: 5,
    borderRadius: 4
  }
})(Slider);

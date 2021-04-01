import { Color } from '../../theme/colors';

const commonStyles = {
  data: {
    strokeWidth: 3
  }
};

export const styles = [
  {
    data: {
      ...commonStyles.data,
      fill: 'rgba(67, 138, 211, 0.2)',
      stroke: Color.primaryLight_2
    }
  },
  {
    data: {
      ...commonStyles.data,
      fill: 'rgba(213, 35, 63, 0.2)',
      stroke: Color.danger
    }
  }
];

import styled from 'styled-components';
import { TD } from '../../../../../../components/Table/Table.styled';
import { Color } from '../../../../../../theme/colors';

export const Wrapper = styled(TD).attrs(props => ({
  colSpan: props.colSpan || undefined
}))`
  padding: 15px 11px;
  background-color: ${Color.primaryLighter};
`;

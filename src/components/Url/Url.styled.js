import styled from 'styled-components';

export const Link = styled.a`
  text-decoration: ${props => (props.underlineOff ? '' : 'underline')};
`;

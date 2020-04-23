import styled from 'styled-components';
import ContainerBase from '../../components/Container/Container';

export const DiagnosisWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: calc(100vh - constant(safe-area-inset-top));
  min-height: calc(100vh - env(safe-area-inset-top));
`;

export const Container = styled(ContainerBase)`
  padding-top: 30px;
  flex: 1;
`;

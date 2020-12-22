import styled from 'styled-components';
import ContainerBase from '../../../../components/Container/Container';

export const DiagnosisWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom));
`;

export const Container = styled(ContainerBase)`
  flex: 1;
`;

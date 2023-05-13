import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  // Style Main dentro da div
  > main {
    display: flex;
    flex-direction: column;
    gap: 8;
  }
`;

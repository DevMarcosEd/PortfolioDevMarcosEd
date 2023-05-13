import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 4.5rem;
  right: 0;

  > img {
    width: 8rem;
    cursor: pointer;
    transition: all 0.5s;

    :hover {
      margin-bottom: 0.5rem;
      transform: scale(1.2);
    }

    @media (max-width: 400px) {
      width: 6rem;
    }
  }
`;

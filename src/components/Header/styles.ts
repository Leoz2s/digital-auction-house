import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  > h1 {
    color: ${({theme}) => theme.COLORS.DARK._700};
    font-size: 3rem;
  }
`;
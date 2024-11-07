import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  background-color: ${({theme}) => theme.COLORS.LIGHT._300};

  height: 7rem;

  `;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > .logo {
    width: 5rem;
    height: 5rem;
  
    color: ${({theme}) => theme.COLORS.DARK._700};
  }
  
  > h1 {
    color: ${({theme}) => theme.COLORS.DARK._700};
    font-size: 3rem;
  }
`;
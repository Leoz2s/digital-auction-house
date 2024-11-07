import styled from 'styled-components';

export const Container = styled.button`
  border-radius: 99px;
  overflow: hidden;

  --size: 5rem;

  width: var(--size);
  height: var(--size);
  > img {
    width: var(--size);
    height: var(--size);
  }
`;
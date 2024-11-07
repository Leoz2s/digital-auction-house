import { ImHammer2 } from 'react-icons/im';

import { Container, Logo } from './styles';
import { Button } from '../Button';
import { ProfileButton } from '../ProfileButton';

export function Header() {
  
  return(
    <Container>
      <Logo>
        <ImHammer2 className='logo' />

        <h1>Digital Auction House</h1>
      </Logo>
      
      <Button text="Sua lista de leilões" />
      <Button text="Novo leilão" />

      <ProfileButton />
    </Container>
  );
};
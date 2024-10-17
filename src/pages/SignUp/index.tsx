import { useEffect, useState } from 'react';
import { Container } from './styles';

import { Header } from '../../components/Header';

export function SignUp() {
  type Auction = {
    id: number;
    name: string;
    status: string;
  };

  const [auctions, setAuctions] = useState<Auction[]>([]);

  useEffect(() => {
    setAuctions([{id: 0, name: 'Auction name', status: 'Ok'}]);
  }, []);
  
  return(
    <Container>
      <Header />
      
      <h2>Digital Auction House</h2>
      {auctions[0] && auctions[0].name}
    </Container>
  );
};
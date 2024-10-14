import { useEffect, useState } from 'react';
import { Container } from './styles';

export function Home() {
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
      
      <h2>Digital Auction House</h2>

      {auctions[0] && auctions[0].name}
    </Container>
  );
};
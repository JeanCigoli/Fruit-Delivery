import React from 'react';
import { useAppSelector } from '../../../data/hooks/redux';

import {
  Container,
  BannerContainer,
  GraphicContainer,
  SalesContainer,
} from './styled';

const Home: React.FC = () => {
  const auth = useAppSelector((state) => state.auth);

  console.log(auth);

  return (
    <Container>
      <BannerContainer>
        <h1>Olá</h1>
      </BannerContainer>
      <div>
        <GraphicContainer />
        <SalesContainer />
      </div>
    </Container>
  );
};

export default Home;

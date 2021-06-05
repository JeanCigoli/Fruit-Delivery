import React from 'react';

import Graphic from './graphic';
import Banner from './banner';
import Sales from './sales';
import Details from './details';

import { Container, GraphicContainer, Divisor } from './styled';

const Home: React.FC = () => (
  <Container>
    <Banner />
    <Details />

    <Divisor>
      <GraphicContainer>
        <Graphic />
      </GraphicContainer>

      <Sales />
    </Divisor>
  </Container>
);

export default Home;

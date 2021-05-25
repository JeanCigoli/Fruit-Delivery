import React, { useEffect, useState } from 'react';
import { SESSION_AUTH } from '../../../main/config/constants';
import { SessionStorage } from '../../../utils/storage/session';
import bannerImage from '../../../assets/fruit-banner.png';
import salesImage from '../../../assets/sales-home.png';
import * as Button from '../../components/button';
import Graphic from './graphic';

import {
  Container,
  BannerContainer,
  GraphicContainer,
  SalesContainer,
  DetailsContainer,
  Divisor,
} from './styled';
import { getDateCurrent } from '../../../utils/date';

const Home: React.FC = () => {
  const [auth, setAuth] = useState<{ [params: string]: any } | null>(null);

  useEffect(() => {
    const sessionAuth = SessionStorage.getItem(SESSION_AUTH);

    setAuth(sessionAuth);
  }, []);

  return (
    <Container>
      <BannerContainer>
        <h1>Olá, {auth?.name}</h1>
        <h3>Bem-vindo a tela inicial</h3>

        <p>
          Aqui você pode visualizar por meio de gráficos as informações do seu
          negócio.
        </p>

        <img src={bannerImage} alt="Banner de frutas" />
      </BannerContainer>

      <DetailsContainer />

      <Divisor>
        <GraphicContainer>
          <Graphic />
        </GraphicContainer>

        <SalesContainer>
          <div>
            <h4>Vendas do dia</h4>
            <h4>{getDateCurrent()}</h4>
          </div>
          <div className="title">
            <h2>20</h2> Itens
          </div>
          <img src={salesImage} alt="Banner de frutas de vendas" />
          <Button.Primary
            type="button"
            color="white"
            backgroundColor="pink"
            label="Mais detalhes"
          />
        </SalesContainer>
      </Divisor>
    </Container>
  );
};

export default Home;

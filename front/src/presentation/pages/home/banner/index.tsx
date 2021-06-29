import React, { useEffect, useState } from 'react';
import { Heading } from '@chakra-ui/react';

import bannerImage from '../../../../assets/fruit-banner.png';
import { SessionStorage } from '../../../../utils/storage/session';
import { SESSION_AUTH } from '../../../../main/config/constants';
import { BannerContainer } from './styled';

const Banner: React.FC = () => {
  const [auth, setAuth] = useState<{ [params: string]: any } | null>(null);

  useEffect(() => {
    const sessionAuth = SessionStorage.getItem(SESSION_AUTH);

    setAuth(sessionAuth);
  }, []);

  return (
    <BannerContainer>
      <Heading as="h1" size="lg" fontFamily="Roboto" isTruncated>
        Olá, {auth?.name}
      </Heading>

      <p>
        Aqui você pode visualizar por meio de gráficos as informações do seu
        negócio.
      </p>

      <img src={bannerImage} alt="Banner de frutas" />
    </BannerContainer>
  );
};

export default Banner;

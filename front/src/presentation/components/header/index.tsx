import React, { useCallback } from 'react';
import { Button } from '@chakra-ui/react';
import history from '../../../infra/history';
import { DetailAll } from '../cards';
import { Container, DetailsContainer, ArrowBackContainer } from './styled';

const Header: React.FC<{ title: string; icon: any }> = ({ title, icon }) => {
  const goBack = useCallback(() => {
    history.back();
  }, []);

  return (
    <Container>
      <DetailsContainer>
        <DetailAll icon={icon} />
        <h1>{title}</h1>
      </DetailsContainer>

      <ArrowBackContainer>
        <Button colorScheme="pink" variant="link" onClick={goBack}>
          voltar
        </Button>
      </ArrowBackContainer>
    </Container>
  );
};

export default Header;

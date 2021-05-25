import React from 'react';
import { MdAdd } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';

import Head from '../../components/header';
import { Container, Header, FiltersContainer } from './styled';
import * as Button from '../../components/button';
import { DetailAll } from '../../components/cards';

const Client: React.FC = () => (
  <Container>
    <Header>
      <Head title="Usuários" />

      <FiltersContainer>
        <DetailAll
          icon={<FaUsers />}
          total={10}
          description="usuários cadastrados"
        />

        <Button.Secondary
          type="button"
          label="Novo usuário"
          icon={<MdAdd />}
          backgroundColor="orange"
          color="white"
        />
      </FiltersContainer>
    </Header>
  </Container>
);

export default Client;

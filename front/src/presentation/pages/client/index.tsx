import React from 'react';
import { MdAdd } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import {
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';

import Head from '../../components/header';
import { Container, Header, FiltersContainer } from './styled';
import { DetailAll } from '../../components/cards';
import Search from '../../components/search';
import { formatDate } from '../../../utils';

const Client: React.FC = () => {
  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Container>
      <Header>
        <Head title="Usuários" />

        <FiltersContainer>
          <DetailAll icon={<FaUsers />} />

          <Search placeholder="Pesquise pelo seu cliente" onClick={onSubmit} />

          <Button
            leftIcon={<MdAdd />}
            ringColor="pink.500"
            colorScheme="pink"
            variant="ghost"
          >
            Novo usuário
          </Button>
        </FiltersContainer>
      </Header>

      <Table variant="striped" size="md" colorScheme="gray">
        <TableCaption>Lista de Usuários</TableCaption>
        <Thead>
          <Tr>
            <Th>id</Th>
            <Th>nome</Th>
            <Th>documento</Th>
            <Th>telefone</Th>
            <Th>criado em</Th>
            <Th>ações</Th>
          </Tr>
        </Thead>
        <Tbody bgColor="white">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
            <Tr>
              <Td>1</Td>
              <Td>Jean Cigoli</Td>
              <Td>40537428895</Td>
              <Td>5511996059255</Td>
              <Td>{formatDate('2021-04-10T15:23:24.000Z')}</Td>
              <Td>
                <Button size="xs" colorScheme="pink" variant="solid">
                  Visualizar
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

export default Client;

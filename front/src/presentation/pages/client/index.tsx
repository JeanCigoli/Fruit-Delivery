import React, { useEffect } from 'react';
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
  Skeleton,
  Stack,
} from '@chakra-ui/react';

import Head from '../../components/header';
import { Container, Header, FiltersContainer } from './styled';
import { DetailAll } from '../../components/cards';
import Search from '../../components/search';
import { formatDate, formatDocument } from '../../../utils';
import { useAppDispatch, useAppSelector } from '../../../data/hooks/redux';
import { listClients } from '../../../data/usecases/clients/list-all-clients';

const Client: React.FC = () => {
  const dispatch = useAppDispatch();
  const clients = useAppSelector((state) => state.clients);

  useEffect(() => {
    listAllClients();
  }, []);

  const onSubmit = (values: any) => {
    console.log(values);
  };

  const listAllClients = () => {
    dispatch(listClients({ page: 0, limit: 10 }));
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

      {clients.data ? (
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
            {clients.data.map((value: any) => (
              <Tr key={value.id}>
                <Td>{value.id}</Td>
                <Td>{value.name}</Td>
                <Td>{formatDocument(value.document)}</Td>
                <Td>{value.phone}</Td>
                <Td>{formatDate(value.createdAt)}</Td>
                <Td>
                  <Button size="xs" colorScheme="pink" variant="solid">
                    Visualizar
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      ) : (
        <Stack spacing="20px">
          {[1, 2, 3, 4].map((_, index) => (
            <Skeleton
              borderRadius="md"
              key={index}
              startColor="pink.500"
              endColor="orange.500"
              height="20px"
            />
          ))}
        </Stack>
      )}
    </Container>
  );
};

export default Client;

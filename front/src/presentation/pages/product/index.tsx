import React, { useEffect } from 'react';
import { MdAdd } from 'react-icons/md';
import { FaArchive } from 'react-icons/fa';
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
import { useAppDispatch, useAppSelector } from '../../../data/hooks/redux';
import Head from '../../components/header';
import { Container, Header, FiltersContainer } from './styled';
import { DetailAll } from '../../components/cards';
import Search from '../../components/search';
import { formatCash, formatDate } from '../../../utils';
import { listProducts } from '../../../data/usecases/products/list-all-product';

const Products: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.product);

  useEffect(() => {
    listAllProducts();
  }, []);

  const onSubmit = (values: any) => {
    console.log(values);
  };

  const listAllProducts = () => {
    dispatch(listProducts({ page: 0, limit: 10 }));
  };

  return (
    <Container>
      <Header>
        <Head title="Estoque de produtos" />

        <FiltersContainer>
          <DetailAll icon={<FaArchive />} />

          <Search placeholder="Pesquise pelo seu produto" onClick={onSubmit} />

          <Button
            leftIcon={<MdAdd />}
            ringColor="pink.500"
            colorScheme="pink"
            variant="ghost"
          >
            Novo produto
          </Button>
        </FiltersContainer>
      </Header>
      {products.data ? (
        <Table variant="striped" size="md" colorScheme="gray">
          <TableCaption>Lista de produtos</TableCaption>
          <Thead>
            <Tr>
              <Th>nome</Th>
              <Th>valor de compra</Th>
              <Th>valor de venda</Th>
              <Th>tipo</Th>
              <Th>criado em</Th>
              <Th>ações</Th>
            </Tr>
          </Thead>

          <Tbody bgColor="white">
            {products.data.map((value: any) => (
              <Tr key={value.id}>
                <Td>{value.name}</Td>
                <Td>{formatCash(value.valueBuy)}</Td>
                <Td>{formatCash(value.valueSale)}</Td>
                <Td>{value.type}</Td>
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

export default Products;

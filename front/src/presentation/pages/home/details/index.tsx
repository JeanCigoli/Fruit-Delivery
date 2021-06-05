import React from 'react';
import { Stat, StatNumber, StatHelpText } from '@chakra-ui/react';
import { FaShoppingCart, FaDollarSign, FaChartLine } from 'react-icons/fa';

import { Container, Card, Icon } from './styled';
import { formatCash } from '../../../../utils';

type LooseParams = {
  color: 'pink' | 'purple' | 'orange';
  [params: string]: any;
}[];

const Details: React.FC = () => {
  const json: LooseParams = [
    {
      icon: <FaShoppingCart />,
      value: 1000.0,
      name: 'Compras',
      color: 'orange',
    },
    {
      icon: <FaDollarSign />,
      value: 2000.0,
      name: 'Vendas',
      color: 'purple',
    },
    {
      icon: <FaChartLine />,
      value: 500.0,
      name: 'Despesas',
      color: 'pink',
    },
  ];

  return (
    <Container>
      {json.map((value, number) => (
        <Card key={number}>
          <Icon color={value.color}>{value.icon}</Icon>
          <Stat>
            <StatNumber>{formatCash(value.value)}</StatNumber>
            <StatHelpText>{value.name}</StatHelpText>
          </Stat>
        </Card>
      ))}
    </Container>
  );
};

export default Details;

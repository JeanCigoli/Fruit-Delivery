import React from 'react';

import { Text } from '@chakra-ui/react';

import salesImage from '../../../../assets/sales-home.png';
import * as Button from '../../../components/button';
import { SalesContainer } from './styled';
import { getDateCurrent } from '../../../../utils/date';

const Sales: React.FC = () => (
  <SalesContainer>
    <div>
      <Text fontSize="md" fontWeight="bold">
        Vendas do dia
      </Text>

      <Text fontSize="md" fontWeight="bold">
        {getDateCurrent()}
      </Text>
    </div>

    <div className="title">
      <Text fontSize="6xl" fontWeight="bold">
        20
      </Text>
    </div>

    <img src={salesImage} alt="Banner de frutas de vendas" />
    <Button.Primary
      type="button"
      color="white"
      backgroundColor="pink"
      label="Mais detalhes"
    />
  </SalesContainer>
);

export default Sales;

import React from 'react';
import { CardDetailsDTO } from '../../../../domain/components/card-details-all-dto';

import { Container, Icon } from './styled';

const DetailsAll: React.FC<CardDetailsDTO> = ({ icon }) => (
  <Container>
    <Icon>
      <div>{icon}</div>
    </Icon>
  </Container>
);

export default DetailsAll;

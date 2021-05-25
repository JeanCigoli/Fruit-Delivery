import React from 'react';
import { CardDetailsDTO } from '../../../../domain/components/card-details-all-dto';

import { Container, Icon } from './styled';

const DetailsAll: React.FC<CardDetailsDTO> = ({ icon, total, description }) => (
  <Container>
    <Icon>
      <div>{icon}</div>
    </Icon>
    <h2>{total}</h2>
    <span>{description}</span>
  </Container>
);

export default DetailsAll;

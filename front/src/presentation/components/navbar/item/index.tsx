import React from 'react';
import { NavItemDTO } from '../../../../domain/components/nav-item-dto';

import { Container } from './styled';

const item: React.FC<NavItemDTO> = ({ active, icon, label }) => (
  <Container active={active}>
    {icon}
    <h3>{label}</h3>
  </Container>
);

export default item;

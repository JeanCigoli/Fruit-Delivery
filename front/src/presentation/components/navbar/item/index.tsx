import React from 'react';
import { Link } from 'react-router-dom';
import { NavItemDTO } from '../../../../domain/components/nav-item-dto';

import { Container } from './styled';

const item: React.FC<NavItemDTO> = ({ active, icon, label, link }) => (
  <Link to={link}>
    <Container active={active}>
      {icon}
      <h3>{label}</h3>
    </Container>
  </Link>
);

export default item;

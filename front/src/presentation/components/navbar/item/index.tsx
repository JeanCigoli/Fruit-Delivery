import React from 'react';
import { Tooltip } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { NavItemDTO } from '../../../../domain/components/nav-item-dto';

import { Container } from './styled';

const item: React.FC<NavItemDTO> = ({ active, icon, label, link }) => (
  <Link to={link}>
    <Tooltip label={label} bg="pink.500" placement="right" fontSize="md">
      <Container active={active}>{icon}</Container>
    </Tooltip>
  </Link>
);

export default item;

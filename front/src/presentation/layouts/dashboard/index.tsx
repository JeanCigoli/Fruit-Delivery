import React from 'react';
import NavBar from '../../components/navbar';

import { Container, NavContainer, ChildrenContainer } from './styled';

const Dashboard: React.FC = ({ children }) => (
  <Container>
    <NavContainer>
      <NavBar />
    </NavContainer>
    <ChildrenContainer>{children}</ChildrenContainer>
  </Container>
);

export default Dashboard;

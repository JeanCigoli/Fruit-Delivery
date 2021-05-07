import React from 'react';
import NavBar from '../../components/navbar';

import { Container, NavContainer } from './styled';

const Dashboard: React.FC = ({ children }) => (
  <Container>
    <NavContainer>
      <NavBar />
    </NavContainer>
    {children}
  </Container>
);

export default Dashboard;

import React from 'react';
import NavBar from '../../components/navbar';

import { Container } from './styled';

const Dashboard: React.FC = ({ children }) => (
  <Container>
    <NavBar />
    {children}
  </Container>
);

export default Dashboard;

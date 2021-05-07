import React from 'react';

import loginImage from '../../../assets/login.png';

import { Container, LeftContainer, RightContainer } from './styled';

const Login: React.FC = ({ children }) => (
  <Container>
    <LeftContainer>
      <img src={loginImage} alt="Home dashboard" />

      <h1>
        Suas vendas sempre na frente com a melhor plataforma para controle do
        seu negócio
      </h1>
    </LeftContainer>
    <RightContainer>{children}</RightContainer>
  </Container>
);

export default Login;

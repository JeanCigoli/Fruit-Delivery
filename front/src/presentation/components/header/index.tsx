import React, { useCallback } from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import history from '../../../infra/history';
import { Container } from './styled';

const Header: React.FC<{ title: string }> = ({ title }) => {
  const goBack = useCallback(() => {
    history.back();
  }, []);

  return (
    <Container>
      <FaAngleLeft onClick={goBack} />
      <h1>{title}</h1>
    </Container>
  );
};

export default Header;

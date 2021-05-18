import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.styles.colors.gray.light}33;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

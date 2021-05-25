import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.styles.colors.gray.light}33;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const NavContainer = styled.div`
  width: 20vw;
  height: 95%;
`;

export const ChildrenContainer = styled.div`
  width: 75vw;
  height: 95%;
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const NavContainer = styled.div`
  width: 18vw;
  height: 100%;
  background-color: ${({ theme }) => theme.styles.colors.pink.light}44;
`;

export const ChildrenContainer = styled.div`
  width: 82vw;
  height: 100%;
`;

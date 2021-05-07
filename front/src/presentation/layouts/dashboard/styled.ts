import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.styles.colors.gray.light}22;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavContainer = styled.div`
  width: 15vw;
  height: 100%;
  background-color: ${({ theme }) => theme.styles.colors.white.normal};
  border-radius: ${({ theme }) => theme.styles.spacing.base};

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

import styled from 'styled-components';

export const NavContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  padding: 15px 0;

  .exit {
    width: 4vw;
    height: 7vh;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    border-radius: ${({ theme }) => theme.styles.spacing.base};
    background-color: ${({ theme }) => theme.styles.colors.white.opacity};
    color: ${({ theme }) => theme.styles.colors.gray.bold};

    svg {
      font-size: ${({ theme }) => theme.styles.font.medium};
    }

    :hover {
      color: ${({ theme }) => theme.styles.colors.white.normal};
      background-color: ${({ theme }) => theme.styles.colors.pink.medium};
    }
  }
`;

export const Logo = styled.div`
  height: 70px;

  img {
    object-fit: contain;
    background-color: transparent;
  }
`;

export const NavList = styled.nav`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

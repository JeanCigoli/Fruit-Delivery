import styled from 'styled-components';
import { devicesHeight } from '../../../main/style/device';

export const NavContainer = styled.div`
  width: 20vw;
  height: 100%;
  background-color: ${({ theme }) => theme.styles.colors.white.normal};
  border-radius: ${({ theme }) => theme.styles.spacing.base};

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  padding: 15px 0;

  img {
    max-width: 60%;
  }

  .exit {
    color: ${({ theme }) => theme.styles.colors.gray.medium};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;

    :hover {
      color: ${({ theme }) => theme.styles.colors.pink.bold};
    }

    svg {
      flex-shrink: 0;
      font-size: ${({ theme }) => theme.styles.font.medium};
      margin-right: 20px;
    }

    h3 {
      width: 90%;
      font-size: ${({ theme }) => theme.styles.font.default};
    }
  }

  @media ${devicesHeight.laptop} {
    img {
      display: none;
    }
  }
`;

export const Logo = styled.div`
  width: 90px;
  height: 70px;
  background-color: ${({ theme }) => theme.styles.colors.orange.bold};
`;

export const NavList = styled.nav`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

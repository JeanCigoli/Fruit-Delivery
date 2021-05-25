import styled from 'styled-components';

export const Container = styled.div`
  width: 375px;
  height: 60px;
  position: relative;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.styles.colors.white.normal};
  border-radius: ${({ theme }) => theme.styles.spacing.base};

  span {
    color: ${({ theme }) => theme.styles.colors.black.opacity};
  }

  h2 {
    color: ${({ theme }) => theme.styles.colors.black.normal};
    font-size: ${({ theme }) => theme.styles.font.large};
    margin: 0 10px;
    font-weight: 600;
  }
`;

export const Icon = styled.div`
  width: 30%;
  height: 120%;

  div {
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.styles.colors.pink.medium};
    border-radius: ${({ theme }) => theme.styles.spacing.base};
    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: ${({ theme }) => theme.styles.colors.white.normal};
      font-size: ${({ theme }) => theme.styles.font.large};
    }
  }
`;

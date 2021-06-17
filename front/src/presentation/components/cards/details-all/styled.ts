import styled from 'styled-components';

export const Container = styled.div`
  width: 80px;
  height: 60px;
`;

export const Icon = styled.div`
  width: 100%;
  height: 100%;

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

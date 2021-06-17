import styled from 'styled-components';

export const Container = styled.div<{ active: boolean }>`
  width: 4vw;
  height: 7vh;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 20px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.styles.spacing.base};

  background-color: ${({ theme, active }) =>
    active
      ? theme.styles.colors.pink.medium
      : theme.styles.colors.white.opacity};

  color: ${({ theme, active }) =>
    active ? theme.styles.colors.white.normal : theme.styles.colors.gray.bold};

  svg {
    font-size: ${({ theme }) => theme.styles.font.medium};
  }

  :hover {
    color: ${({ theme }) => theme.styles.colors.white.normal};
    background-color: ${({ theme }) => theme.styles.colors.pink.medium};
  }
`;

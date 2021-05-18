import styled from 'styled-components';

export const Container = styled.div<{ active: boolean }>`
  width: 90%;
  height: 30px;
  margin-bottom: 20px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  color: ${({ theme, active }) =>
    active ? theme.styles.colors.pink.bold : theme.styles.colors.gray.medium};

  svg {
    width: 15%;
    flex-shrink: 0;
    font-size: ${({ theme }) => theme.styles.font.medium};
    margin-right: 20px;
  }

  h3 {
    width: 50%;
    font-weight: ${({ active }) => (active ? 'bold' : '500')};
    font-size: ${({ theme }) => theme.styles.font.default};
  }

  :hover {
    color: ${({ theme }) => theme.styles.colors.pink.bold};
  }
`;

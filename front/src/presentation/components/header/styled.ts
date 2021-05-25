import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    font-size: ${({ theme }) => theme.styles.font.medium};
    margin-right: 10px;
    cursor: pointer;
  }

  h1 {
    font-size: ${({ theme }) => theme.styles.font.medium};
    font-weight: 800;
  }
`;

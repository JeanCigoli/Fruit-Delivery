import styled from 'styled-components';

export const SalesContainer = styled.div`
  width: 28%;
  height: 100%;
  background-color: ${({ theme }) => theme.styles.colors.orange.light};
  border-radius: ${({ theme }) => theme.styles.spacing.base};
  color: ${({ theme }) => theme.styles.colors.white.normal};
  font-size: ${({ theme }) => theme.styles.font.default};

  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    height: 40%;
    object-fit: contain;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
      font-size: ${({ theme }) => theme.styles.font.xxLarge};
      margin-right: 5px;
    }
  }
`;

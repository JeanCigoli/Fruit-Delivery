import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  height: 100%;
`;

export const BannerContainer = styled.div`
  width: 100%;
  height: 30%;
  padding-left: 25px;
  background-color: ${({ theme }) => theme.styles.colors.pink.light};
  border-radius: ${({ theme }) => theme.styles.spacing.base};
  color: ${({ theme }) => theme.styles.colors.white.normal};

  position: relative;

  display: flex;
  justify-content: center;
  flex-direction: column;

  img {
    position: absolute;
    height: 80%;
    right: 10px;
    bottom: 10px;
  }

  h1 {
    letter-spacing: 0.5px;
    font-size: ${({ theme }) => theme.styles.font.large};
  }

  h3 {
    margin-top: 10px;
    letter-spacing: 0.5px;
    font-size: ${({ theme }) => theme.styles.font.medium};
  }

  p {
    margin-top: 50px;
    letter-spacing: 0.5px;
    font-size: ${({ theme }) => theme.styles.font.default};
  }
`;

export const DetailsContainer = styled.div`
  width: 100%;
  height: 12%;
  margin-top: 15px;
  background-color: ${({ theme }) => theme.styles.colors.white.normal};
  border-radius: ${({ theme }) => theme.styles.spacing.base};
`;

export const Divisor = styled.div`
  width: 100%;
  height: calc(58% - 30px);
  margin-top: 15px;

  display: flex;
  justify-content: space-between;
`;

export const GraphicContainer = styled.div`
  width: 70%;
  height: 100%;
  background-color: ${({ theme }) => theme.styles.colors.white.normal};
  border-radius: ${({ theme }) => theme.styles.spacing.base};
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

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

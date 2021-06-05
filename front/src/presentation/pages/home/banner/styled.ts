import styled from 'styled-components';

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
  }

  h3 {
    margin-top: 10px;
    letter-spacing: 0.5px;
  }

  p {
    margin-top: 50px;
    letter-spacing: 0.5px;
    font-size: ${({ theme }) => theme.styles.font.default};
  }
`;

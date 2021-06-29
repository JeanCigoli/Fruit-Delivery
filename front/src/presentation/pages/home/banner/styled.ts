import styled from 'styled-components';

export const BannerContainer = styled.div`
  width: 100%;
  height: 15%;
  padding-left: 25px;
  border-radius: ${({ theme }) => theme.styles.spacing.base};
  color: ${({ theme }) => theme.styles.colors.black.normal};

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

  p {
    margin-top: 1vh;
    letter-spacing: 0.5px;
    font-size: ${({ theme }) => theme.styles.font.default};
  }
`;

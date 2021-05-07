import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 550px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    line-height: 1.5em;
    letter-spacing: 0.5px;
    margin-bottom: 15px;

    font-size: ${({ theme }) => theme.styles.font.large};
    color: ${({ theme }) => theme.styles.colors.black.normal};
  }
`;

export const Paragraph = styled.p`
  line-height: 1.5em;
  letter-spacing: 0.5px;
  margin-bottom: 25px;
  font-weight: lighter;

  font-size: ${({ theme }) => theme.styles.font.default};
  color: ${({ theme }) => theme.styles.colors.gray.medium};
`;

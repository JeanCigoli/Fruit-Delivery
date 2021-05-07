import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 30px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;

  svg {
    position: absolute;
    font-size: ${({ theme }) => theme.styles.font.medium};
    right: 10px;
    bottom: 10px;
    color: ${({ theme }) => theme.styles.colors.pink.medium};
  }
`;

export const Label = styled.label`
  width: 100%;
  height: auto;
  padding: 5px 0;
  color: ${({ theme }) => theme.styles.colors.black.normal};
  font-size: ${({ theme }) => theme.styles.font.default};
`;

export const Input = styled.input<{ error: boolean }>`
  width: 100%;

  min-height: 40px;
  height: 6.5vh;
  max-height: 47px;

  outline: none;
  transition: all 0.3s;
  background-color: transparent;

  font-size: ${({ theme }) => theme.styles.font.small};
  padding-left: ${({ theme }) => theme.styles.spacing.short};

  border-radius: ${({ theme }) => theme.styles.spacing.short};
  border: ${({ error, theme }) => {
    if (error) {
      return `1.5px solid ${theme.styles.colors.red.medium}`;
    }

    return `1.5px solid ${theme.styles.colors.gray.light}`;
  }};

  ::placeholder {
    color: #cccccc;
  }

  :focus {
    border: 1.5px solid ${({ theme }) => theme.styles.colors.pink.medium};
  }
`;

export const Error = styled.p`
  position: absolute;
  bottom: -22px;
  color: ${({ theme }) => theme.styles.colors.red.medium};
  font-size: ${({ theme }) => theme.styles.font.small};
`;

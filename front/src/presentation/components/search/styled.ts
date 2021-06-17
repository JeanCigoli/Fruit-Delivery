import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  position: relative;

  svg {
    height: 100%;
    position: absolute;
    right: 20px;
    cursor: pointer;

    font-size: ${({ theme }) => theme.styles.font.medium};
    color: #718096;
  }
`;

export const Input = styled.input`
  width: 100%;

  min-height: 40px;
  height: 6.5vh;
  max-height: 47px;

  outline: none;
  transition: all 0.3s;
  background-color: #edf2f7aa;

  font-size: ${({ theme }) => theme.styles.font.small};
  padding-left: ${({ theme }) => theme.styles.spacing.base};

  border-radius: ${({ theme }) => theme.styles.spacing.short};

  ::placeholder {
    color: ${({ theme }) => theme.styles.colors.gray.medium};
  }
`;

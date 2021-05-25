import styled from 'styled-components';
import { ButtonDTO } from '../../../../domain/components/button-dto';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
`;

export const Button = styled.button<ButtonDTO>`
  width: 100%;
  height: 50px;
  font-weight: 500;
  outline: none;
  transition: all 0.2s;
  cursor: pointer;
  letter-spacing: 0.5px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  border: 2px solid
    ${({ backgroundColor, theme }) => theme.styles.colors[backgroundColor].bold};
  color: ${({ backgroundColor, theme }) =>
    theme.styles.colors[backgroundColor].bold};
  background-color: ${({ theme }) => theme.styles.colors.white.normal};
  font-size: ${({ theme }) => theme.styles.font.default};
  border-radius: ${({ theme }) => theme.styles.spacing.short};

  transition: background-color ease-out 0.3s;

  svg {
    font-size: ${({ theme }) => theme.styles.font.medium};
  }

  :hover {
    background-color: ${({ backgroundColor, theme }) =>
      theme.styles.colors[backgroundColor].bold};
    color: ${({ theme }) => theme.styles.colors.white.normal};
  }

  :disabled {
    opacity: 0.65;
  }
`;

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
  border: none;
  outline: none;
  transition: all 0.2s;
  cursor: pointer;
  letter-spacing: 0.5px;

  background-color: ${({ backgroundColor, theme }) =>
    theme.styles.colors[backgroundColor].bold};
  color: ${({ color, theme }) => theme.styles.colors[color].normal};
  font-size: ${({ theme }) => theme.styles.font.default};
  border-radius: ${({ theme }) => theme.styles.spacing.short};

  :hover {
    opacity: 0.85;
  }

  :disabled {
    opacity: 0.65;
  }
`;

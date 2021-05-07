import React, { memo } from 'react';
import { ButtonDTO } from '../../../../domain/components/button-dto';

import { Container, Button } from './styled';

const ButtonContainer: React.FC<ButtonDTO> = ({
  color,
  backgroundColor,
  type,
  label,
  icon,
  ...props
}) => (
  <Container>
    <Button
      backgroundColor={backgroundColor}
      color={color}
      type={type}
      {...props}
    >
      {icon}
      {label}
    </Button>
  </Container>
);

export default memo(ButtonContainer);

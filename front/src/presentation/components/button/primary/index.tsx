import React, { memo } from 'react';
import { ButtonDTO } from '../../../../domain/components/button-dto';

import { Container, Button } from './styled';

const ButtonPrimary: React.FC<ButtonDTO> = ({
  color,
  backgroundColor,
  type,
  label,
  icon,
  children,
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

export default memo(ButtonPrimary);

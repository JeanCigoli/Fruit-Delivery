import { Spinner } from '@chakra-ui/react';
import React, { memo } from 'react';
import { ButtonDTO } from '../../../../domain/components/button-dto';

import { Container, Button } from './styled';

const ButtonPrimary: React.FC<ButtonDTO> = ({
  color,
  backgroundColor,
  type,
  label,
  icon,
  isLoading,
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
      {isLoading ? (
        <Spinner colorScheme={color} />
      ) : (
        <>
          {icon}
          {label}
        </>
      )}
    </Button>
  </Container>
);

export default memo(ButtonPrimary);

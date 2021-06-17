import React, { memo } from 'react';
import { Spinner } from '@chakra-ui/react';
import { ButtonDTO } from '../../../../domain/components/button-dto';

import { Container, Button } from './styled';

const ButtonContainer: React.FC<ButtonDTO> = ({
  color,
  backgroundColor,
  type,
  label,
  icon,
  isLoading,
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

export default memo(ButtonContainer);

import React, { memo } from 'react';
import { InputDTO } from '../../../domain/components/input-dto';

import { Container, Error, Input, Label } from './styled';

const InputComponent = React.forwardRef<HTMLInputElement, InputDTO>(
  (props, ref) => {
    const { name, label, type, icon, error, ...rest } = props;

    return (
      <Container>
        <Label htmlFor={name}>{label}</Label>

        <Input type={type} name={name} error={!!error} ref={ref} {...rest} />

        {icon}

        {error && <Error>{error.message}</Error>}
      </Container>
    );
  }
);

export default memo(InputComponent);

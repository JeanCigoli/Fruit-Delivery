import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { yupResolver } from '@hookform/resolvers/yup';

import { LoginType } from '../../../domain/forms/login-form';
import Input from '../../components/input';
import * as Button from '../../components/button';
import { Container, Form, Paragraph } from './styled';
import { authenticationSchema } from '../../../validation/forms';

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: yupResolver(authenticationSchema),
  });

  const [showPassword, setShowPassword] = useState(true);

  const onSubmit = (value: LoginType) => {
    console.log(value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2>Vamos lá.</h2>

        <Paragraph>Organize seu negócio! Entre com sua conta.</Paragraph>

        <Input
          label="Usuário"
          type="text"
          {...register('login')}
          error={errors.login}
        />

        <Input
          label="Senha"
          type={showPassword ? 'password' : 'text'}
          {...register('password')}
          error={errors.password}
          icon={
            showPassword ? (
              <IoMdEyeOff onClick={handleShowPassword} />
            ) : (
              <IoMdEye onClick={handleShowPassword} />
            )
          }
        />

        <Button.Primary
          type="submit"
          label="Entrar"
          backgroundColor="pink"
          color="white"
        />
      </Form>
    </Container>
  );
};

export default Login;

import * as yup from 'yup';
import { cpf as validCpf, cnpj as validCnpj } from 'cpf-cnpj-validator';

export const string = (field: string) =>
  yup
    .string()
    .nullable(true)
    .min(3, `${field} tem que ter no mínimo 3 caracteres`);

export const number = (field: string) =>
  yup
    .string()
    .nullable(true)
    .matches(/[0-9]/, `${field} precisa ser um número`);

export const stringNullable = yup.string().notRequired().nullable(true);

export const email = yup
  .string()
  .trim()
  .matches(
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    'Valor inserido não corresponde a um e-mail',
  )
  .nullable(true)
  .required('O e-mail é obrigatório');

export const password = yup
  .string()
  .trim()
  .matches(
    /^([a-z]|[A-Z])(?=.*[@#$%^&+=]).+$/gi,
    'A senha está fora dos padrões',
  )
  .required('A senha é obrigatória');

export const document = yup
  .mixed()
  .nullable(true)
  .test('is-cpf-or-cnpj', 'O CPF ou CNPJ está fora dos padrões', (value) => {
    if (value.length <= 11) {
      return validCpf.isValid(value);
    }

    return validCnpj.isValid(value);
  });

export const phone = yup
  .string()
  .matches(/^(55\d{11})$|^(55\d{10})$/, 'O telefone está fora dos padrões')
  .nullable(true)
  .required('O telefone é obrigatório');

export const value = yup
  .number()
  .positive('O valor precisa ser maior que 0')
  .required('O valor é obrigatório');

export const freightValue = yup
  .number()
  .positive('O frete precisa ser maior que 0')
  .required('O frete é obrigatório');

export const quantity = yup
  .number()
  .positive('A quantidade precisa ser maior que 0')
  .required('A quantidade é obrigatório');

export const zipCode = yup
  .string()
  .matches(/^(\d{8})$/, 'O cep está inválido')
  .nullable(true)
  .required('O Cep é obrigatório');

export const dateInit = yup
  .date()
  .max(yup.ref('final'), 'A data inicial não pode ser maior que a final')
  .required('A data inicial é obrigatória');

export const dateFinal = yup
  .date()
  .max(yup.ref('final'), 'A data inicial não pode ser maior que a final')
  .required('A data inicial é obrigatória');

export const address = {
  zipCode,
  street: string('O nome da rua').required('O nome da rua é obrigatório'),
  neighborhood: string('O bairro').required('O bairro é obrigatório'),
  number: yup.string().required('O número da residência é obrigatório'),
  complement: stringNullable,
  city: number('A cidade').required('A cidade é obrigatória'),
};

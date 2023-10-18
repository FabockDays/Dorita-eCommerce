import * as Yup from 'yup';
import { regEmail } from '../utils';

export const checkoutValidationSchema = Yup.object({
  name: Yup.string().required('Campo requerido'),
  cellphone: Yup.string().required('Campo requerido'),
  location: Yup.string().required('Campo requerido'),
  address: Yup.string().required('Campo requerido'),
});

export const registerValidationSchema = Yup.object({
  name: Yup.string().required('Campo requerido'),
  email: Yup.string().matches(regEmail, 'Mail no válido').required('Campo requerido'),
  password: Yup.string().min(6, 'Míno de caracteres: 6').required('Campo requerido')
})

export const loginValidationSchema = Yup.object({
  email: Yup.string().matches(regEmail, 'Mail no válido').required('Campo requerido'),
  password: Yup.string().min(6, 'Míno de caracteres: 6').required('Campo requerido')
})



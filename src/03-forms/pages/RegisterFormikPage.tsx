
import { Form, Formik } from 'formik';
import  * as Yup from "yup";
import { MyTextInput } from '../components';

import '../styles/styles.css'



export const RegisterFormikPage = () => {
  
  return (
    <div>
      
      <h1>Register Formik Page</h1>
      <Formik 
        initialValues={{
          name: '',
          email: '',
          password1: '',
          password2: '',
        }}
        onSubmit={ (values) => {
          console.log(values);
        }}
        validationSchema={ Yup.object({
          name: Yup.string()
                  .required('Requerido')
                  .min(2,'Debe tener 3 o más caracteres')
                  .max(15, 'Debetener 15 caracteres o menos.'),
          email: Yup.string().email('Debe ser un correo válido.')
                     .required('Requerido'),
          password1: Yup.string()
                        .required('Requerido')
                        .min(6,'Mínimo 6 caracteres.'),
          password2: Yup.string()
                        .oneOf([Yup.ref('password1')], 'Las contraseñas no son iguales.')
                        .required('Requerido')

        })}
        
      >
        {
          (formik) => (
            <Form>
              <MyTextInput label="Name" name="name" />
              <MyTextInput label="Email" name="email" type='email' />
              <MyTextInput label="Pasword" name="password1" />
              <MyTextInput label="Repeat password" name="password2" />
              <button type='submit'>Create</button>
              <button type='reset'>Reset Form</button>
            </Form>
          )
        }
      </Formik>
    </div>

  )
}

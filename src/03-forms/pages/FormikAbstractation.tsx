
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { MyTextInput, MySelect, MyCheckbox } from "../components";

import '../styles/styles.css'

export const FormikAbstractation = () => {

  return (
    <div>
      <h1>Formik Abstractation Page</h1>
      <Formik 
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={ ( values ) => {
          console.log( values );
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
                        .max(15, 'Debe tener 15 caracteres o menos')
                        .required('Requerido'),
          lastName: Yup.string()
                        .max(15, 'Debe tener 15 caracteres o menos')
                        .required('Requerido'),
          email: Yup.string().email('Debe ser un email válido.')
                    .required('Requerido'),
          terms: Yup.boolean()
                    .oneOf([ true ], 'Debe aceptar las condiciones.'),
          jobType: Yup.string()
                      .notOneOf(["it-senior", ""], 'Esta opción no es permitida.')
                      .required('Requerido')
        })}
      >
        {
          (formik) => (
            <Form>
              <MyTextInput 
                label="First Name" 
                name="firstName" 
                placeholder="First name"
              />
              <MyTextInput 
                label="Last Name" 
                name="lastName" 
                placeholder="Last name"
              />
              <MyTextInput 
                label="Email" 
                name="email" 
                placeholder="Email"
                type="email"
              />

              <MySelect label="Job Type" name="jobType" >
                <option value="">Pick something</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-senior">IT Senior</option>
              </MySelect>

              <MyCheckbox label="Terms and conditions." name="terms" />

              <button type='submit'>Submit</button>
            </Form>
          )
        }
      </Formik>
     
    </div>
  )
}

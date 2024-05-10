
import '../styles/styles.css'
import { useForm } from '../hooks/useForm'

interface InitialData {
  name: '',
  email: '',
  password1: '',
  password2: '',
}

export const RegisterPage = () => {

  const { onChangeHandler, onSubmit, resetForm, isValidEmail, formData } = useForm({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });

  const { name, email, password1, password2 } = formData;

  return (
    <div>
      <h1>RegisterPage</h1>
      <form noValidate onSubmit={ (eve) => onSubmit(eve) }>

        <input type="text" 
          placeholder='Name'
          value={ name }
          onChange={ (ev) => onChangeHandler(ev) }
          name='name'
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        { name.trim().length <= 0 && <span>Este campo es necesario</span> }
        
        <input type="email" 
          placeholder='Email'
          value={ email }
          onChange={ onChangeHandler }
          name='email'
          className= {`${ !isValidEmail(email) &&  'has-error'}`}
        />
        { !isValidEmail(email) && <span>Email no es válido</span> }
        
        <input type="password" 
          placeholder='Password'
          value={ password1 }
          onChange={ onChangeHandler }
          name='password1'
        />
        { password1.trim().length <= 0 && <span>Este campo es necesario</span> }
        { password1.trim().length < 6 && password1.trim().length > 0 && <span>El password debe ser de 6 caracteres</span> }
        
        <input type="password" 
          placeholder='Repeat password'
          value={ password2 }
          onChange={ onChangeHandler }
          name='password2'
        />
        { password2.trim().length <= 0 && <span>Este campo es necesario</span> }
        { password2.trim().length > 0  && password1 !== password2 && <span>Las contraseñas deben ser iguales</span> }

        <button type='submit'>Create</button>
        <button type='button' onClick={ resetForm }>Reset Form</button>
      </form>
    </div>

  )
}

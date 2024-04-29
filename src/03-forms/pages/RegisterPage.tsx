


import '../styles/styles.css'

export const RegisterPage = () => {
  return (
    <div>
      <h1>Register Page</h1>

      <form action="">
        <input
          type="text"
          placeholder='Name'
        />
        <input
          type="email"
          placeholder='Email'
        />
        <input
          type="password1"
          placeholder='Password'
        />
        <input
          type="password"
          placeholder='Repeate Password'
        />

        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

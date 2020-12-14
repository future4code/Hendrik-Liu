import React from 'react'
import { useHistory } from 'react-router-dom'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import useForm from '../../hooks/useForm'
import { goToSignUpPage } from '../../routes/coordinator'

const LoginPage = () => {
  // useUnprotectedPage()
  const history = useHistory()
  const [form, handleInputChange] = useForm({ email: '', password: '' })

  const handleSubmission = (event) => {
    event.preventDefault()
  }

  return (
    <div>
      <form>
        <input
          type={"email"}
          name={"email"}
          value={form.email}
          onChange={handleInputChange}
          required
        />
        <input
          type={"password"}
          name={"password"}
          value={form.password}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmission}>Login</button>
      </form>
      <button onClick={() => goToSignUpPage(history)}>Não tem login? Clique aqui</button>
    </div>
  )
}

export default LoginPage


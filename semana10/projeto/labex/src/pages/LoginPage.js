import React from 'react';
import { useHistory} from 'react-router-dom'

const LoginPage = () => {
  const history = useHistory()

  const goToAdminPage = () => {
    history.push('/admin')
  }
  return (
    <div>
      LoginPage: login como administrador.
      <button onClick={goToAdminPage}>Login</button>
    </div>
  )
}

export default LoginPage;
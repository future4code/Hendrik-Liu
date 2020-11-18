import React from 'react';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
  const history = useHistory()

  const goToLoginPage = () => {
    history.push("/login")
  }

  const goToFormPage = () => {
    history.push("/aplication-form")
  }

  return (
    <div>
      <button onClick={goToFormPage}>Quero me candidatar</button>
      <button onClick={goToLoginPage}>Login</button>
    </div>
  )
}

export default HomePage;
import React from 'react';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
  const history = useHistory()

  const goToLoginPage = () => {
    history.push("/login")
  }

  const goToTripsListPage = () => {
    history.push("/tripslist")
  }

  return (
    <div>
      <button onClick={goToTripsListPage}>Ir para página de Viagens</button>
      <button onClick={goToLoginPage}>Login</button>
    </div>
  )
}

export default HomePage;
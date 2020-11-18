import React from 'react';
import { useHistory } from 'react-router-dom';
import useProtectedPage from '../hooks/useProtectedPage'

const TripsListPage = () => {
  const history = useHistory()

  useProtectedPage()
  
  const goToCreateTripPage = () => {
    history.push("/login/create")
  }

  return (
    <div>
      <h2>TripsListPage</h2>
      <button onClick={goToCreateTripPage}>Criar Viagem</button>
    </div>
  )
}

export default TripsListPage;
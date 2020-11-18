import React from 'react';
import { useHistory } from 'react-router-dom';


const AdminPage = () => {
  const history = useHistory()

  const goToCreateTripPage = () => {
    history.push("/newtrip")
  }

  const goToTripDetailsPage = () => {
    history.push("tripdetails")
  }

  return (
    <div>
      AdminPage
      <button onClick={goToCreateTripPage}>Nova Viagem</button>
      <button onClick={goToTripDetailsPage}>Detalhes da viagem</button>
    </div>
  )
}

export default AdminPage;
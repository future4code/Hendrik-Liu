import React from 'react';
import { useHistory } from 'react-router-dom';

const TripsListPage = () => {
  const history = useHistory()

  const goToFormPage = () => {
    history.push("/tripslist/form")
  }

  return (
    <div>
      TripsListPage
      <button onClick={goToFormPage}>Inscrever</button>
    </div>
  )
}

export default TripsListPage;
import React, { useEffect } from 'react';
import useProtectedPage from "../hooks/useProtectedPage"

const CreateTripPage = () => {
  useProtectedPage()
  
  return (
    <div>
      <h2>Nova viagem</h2>
      <input type="text" placeholder="nome" />
      <input type="text" placeholder="planeta" />
      <input type="date" placeholder="data" />
      <input type="text" placeholder="descrição" />
      <input type="number" placeholder="duração em dias" />
    </div>
  )
}

export default CreateTripPage;
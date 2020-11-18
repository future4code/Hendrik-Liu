import React from 'react';
import useProtectedPage from '../hooks/useProtectedPage'

const TripDetailsPage = () => {
  useProtectedPage()
  return (
    <div>
      TripDetailsPage
    </div>
  )
}

export default TripDetailsPage;
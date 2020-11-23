import React, { useEffect, useState } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';
import useProtectedPage from '../hooks/useProtectedPage'


const Card = styled.div`
  border: solid 1px black;
  padding: 10px;
  background-color: lightgray;
`

const TripsListPage = () => {
  const history = useHistory()
  const [getTripsList, setGetTripsList] = useState([]);
  
  useEffect(() => {
    getTrips();
  }, [])

  useProtectedPage()
  
  const getTrips = () => {
    axios.get ('https://us-central1-labenu-apis.cloudfunctions.net/labeX/hendrik-dumont/trips')
    .then((response) => {
      setGetTripsList(response.data.trips)
    })
    .catch((error) => {
      console.log(error.message)
    })
  }

  const goToCreateTripPage = () => {
    history.push("/login/create")
  }

  return (
    <div>
      <button onClick={goToCreateTripPage}>Criar Viagem</button>
      {getTripsList.map((trip) =>{
        return (
          <Card>
            <p>{trip.name}</p>
            <p>{trip.description}</p>
            <p>Planeta: {trip.planet}</p>
            <p>Duração: {trip.durationInDays} dias</p>
            <p>Data: {trip.date}</p>
          </Card>
        )
      })}
    </div>
  )
}

export default TripsListPage;
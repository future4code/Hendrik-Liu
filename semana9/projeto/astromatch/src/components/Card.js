import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import MainScreen from './MainScreen';
import Match from './Match';

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-around;
  height: 100vh;
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid black;
  height: 85vh;
  width: 30vw;
  padding: 20px;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Card = () => {
  const [profiles, setProfiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(true);  

  const changePage = () => {
    setCurrentPage(!currentPage)
  }  

  const clearMatches = () => {
    const body = {id: profiles.id}
    axios.put ("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/hendrik-liu-dumont/clear", body)
      .then ((response) => {
        console.log(response)
      })
      .catch ((error) => {
          console.log(error)
      })
  }

  return (
    <AppContainer>
      <CardContainer>
        <Header>
        <button onClick={() => clearMatches()}>Limpar Matches</button> 
          <p>astromatch</p>
          <button onClick={changePage}>Matches</button>
        </Header>
        {currentPage ? <MainScreen /> : <Match />}
      </CardContainer>
    </AppContainer>
  );
}

export default Card;
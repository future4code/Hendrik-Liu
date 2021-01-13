import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

const Button = styled.button`
  width: 150px;
  margin: 15px;
  padding: 10px;
`

const HomePage = () => {
  const history = useHistory()

  const goToLoginPage = () => {
    history.push("/login")
  }

  const goToFormPage = () => {
    history.push("/aplication-form")
  }

  return (
    <HomeContainer>
      <Button onClick={goToFormPage}>Quero me candidatar</Button>
      <Button onClick={goToLoginPage}>Login</Button>
    </HomeContainer>
  )
}

export default HomePage;
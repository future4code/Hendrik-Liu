import React, { useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Profile = styled.div`
  display: flex;
  flex-direction: column;
`

const Photo = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  > img {
    height: 50vh;
    max-width: 100%;
    padding:10px;
  }  
`

const Infos = styled.div`
  width: 80%;
  text-align: justify;
  margin: 0 20px;
  > h2{
    font-size: 18px;
    font-weight: bold;
  }
`

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
`

const MainScreen = () => {
  const [profiles, setProfiles] = useState([]); 

  useEffect (() => {
    getProfile()
  }, []);
  
  const getProfile = () => {
    axios.get ("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/hendrik-liu-dumont/person")
    .then((response) => {
        setProfiles(response.data.profile)
    })
    .catch((error) => {
        console.log(error)
    })
  } 

  const choosePerson = () => {
    const body = {
      id: profiles.id, 
      choice: true
    }
    axios.post ("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/hendrik-liu-dumont/choose-person", body)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const like = () => {
    getProfile()
    choosePerson()
  }

  if (profiles === null) {
    return <p>Carregando...</p>
  } 

  return (
    <div>
      <Profile>
        <Photo>
          <img src={profiles.photo} />
        </Photo>
        <Infos>
          <h2>{profiles.name}, {profiles.age}</h2>
          <p>{profiles.bio}</p>
        </Infos>
      </Profile>
      <Buttons>
        <button onClick={() => getProfile()}>No</button>
        <button onClick={() => like()}>Like</button>
      </Buttons>
    </div>
  );
}

export default MainScreen;
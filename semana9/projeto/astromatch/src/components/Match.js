import React, { useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const MatchesContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: 10px;
  > img {
    width: 50px;
    height:50px;
    border: none;
    border-radius: 50%;
    box-shadow: 6px 6px 11px -8px rgba(0,0,0,0.75); 
    margin-right: 15px;
  }
`

const Match = () => {
  const [matches, setMatches] = useState([]);

  useEffect (() => {
    getMatches()
  }, []);

  const getMatches = () => {
    axios.get ("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/hendrik-liu-dumont/matches")
    .then((response) => {
        setMatches ((response).data.matches)
    })
    .catch ((error) => {
        console.log (error)
    }) 
  }

  return (
    <div>
      {matches.map((match) => {
        return (
          <MatchesContainer key={match.id}>
              <img src={match.photo} />
              <p>{match.name}</p>
          </MatchesContainer>
        )
      } 
    )}
    </div>
  );
}

export default Match;
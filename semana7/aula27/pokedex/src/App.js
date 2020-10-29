import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    pokemonList: [],
    selectedPokemon: ""
  }

  getAllPokemons

  // onChangeSelectedPokemon = (event) => {
  //   alert('Pokémon selecionado.');
  // }

  render() {
    return(
      <div>
        <select onChange={this.onChangeSelectedPokemon}>
          <option> Bulbasaur </option>
          <option> Charmander </option>
          <option> Squirtle </option>
        </select>
      </div>
    ) 
  }
}

export default App;

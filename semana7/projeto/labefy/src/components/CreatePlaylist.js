import React from 'react';
import axios from 'axios';

class CreatePlaylist extends React.Component {
  state = {
    playlistName: ""
  }

  createPlaylist = () => {
    const axiosConfig = {
      headers: {
        Authorization: 'hendrik-liu-dumont'
      }
    }

    const body = {
      name: this.state.playlistName
    }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, axiosConfig)
    
    .then((response) => {
      alert("Playlist criada com sucesso.")
      this.setState({ playlistName: "" })
      
    }).catch((error) => {
      console.log(error.message)
    })
  }

  onChangeInputName = (event) => {
    this.setState({ playlistName: event.target.value })
  }

  render() {
    return(
      <div>
        <h2>Criar nova playlist</h2>
        <input onChange={this.onChangeInputName} value={this.state.playlistName}></input>
        <button onClick={this.createPlaylist}> Criar playlist </button>
      </div>
    )
  }
}

export default CreatePlaylist
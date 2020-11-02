import React from 'react';
import axios from 'axios';

class AddTrackToPLaylist extends React.Component {
  state = {
    track: "",
    artist: "",
    url: ""
  }

  addTrackToPLaylist = (playlistId) => {
    const body = {
      name: this.state.track,
      artist: this.state.artist,
      url: this.state.url
    }

    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`, body, {
      headers: {
        Authorization: 'hendrik-liu-dumont'
      }
    }).then((response) => {
      this.setState({ track: "", artist: "", url: ""})
      alert("Música adicionada com sucesso.")
    }).catch((error) => {
      console.log(error.message)
    })
  }

  onChangeMusica = (event) => {
    this.setState({ musica: event.target.value})
  }

  onChangeArtista = (event) => {
    this.setState({ artista: event.target.value})
  }

  onChangeUrl = (event) => {
    this.setState({ url: event.target.value})
  }


  render(){
    return(
      <div>
        <label> Música </label>
        <input onChange={this.onChangeMusica} value={this.state.musica} />

        <label> Artista </label>
        <input onChange={this.onChangeArtista} value={this.state.artista} />
        
        <label> Url </label>
        <input onChange={this.onChangeUrl} value={this.state.url} />

        <button onClick={this.addTrackToPLaylist}> Adicionar </button>  
      </div>
    )
  }
}

export default AddTrackToPLaylist;
import React from 'react';
import axios from 'axios';

class PlaylistsList extends React.Component {
  state = {
    playlists: []
  }

  componentDidMount = () => {
    this.getAllPlaylists();
  }

  componentDidUpdate = () => {
    this.getAllPlaylists();
  }
  
  getAllPlaylists = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
      headers: {
        Authorization: 'hendrik-liu-dumont'
      }
    }).then((response) => {
      this.setState({ playlists: response.data.result.list})
    }).catch((error) => {
      console.log(error.message)
    })
  }

  render(){
    return(
      <div>
        <h2>Minhas Playlists</h2>
        {this.state.playlists.map((playlist) => {
          return (
            <div>
              <p key={playlist.id}> {playlist.name} </p>
              <button> Excluir </button>
            </div>
          )
        })}
      </div>
    )
  }
}

export default PlaylistsList;
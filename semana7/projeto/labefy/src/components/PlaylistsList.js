import React from 'react';
import axios from 'axios';
import AddTrackToPLaylist from './AddTrackToPlaylist'
class PlaylistsList extends React.Component {
  state = {
    playlists: [],
    addTrack: false
  }

  addTrack = () => {
    this.setState({addTrack: !false})
    

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

  deletePlaylist = (playlistId) => {
    const confirm = window.confirm("Deseja excluir essa playlist?")

    if(confirm){
      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`, {
        headers: {
          Authorization: 'hendrik-liu-dumont'
        }
      }).then((response) => {
        alert("Playlist excluída com sucesso")
      }).catch((error) => {
        console.lot(error.message)
      })
    }
  }

  render(){
    return(
      <div>
        <h2>Minhas Playlists</h2>
        {this.state.playlists.map((playlist) => {
          return (
            <div>
              <p key={playlist.id}> {playlist.name} </p>
              <button onClick={() => this.deletePlaylist(playlist.id)}> Excluir </button>
              <button onClick={this.addTrack}>Adicionar música</button>
              
              <AddTrackToPLaylist playlistId={playlist.id} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default PlaylistsList;
import React from 'react';
import axios from 'axios';
import CreatePlaylist from './components/CreatePlaylist';
import PlaylistsList from './components/PlaylistsList'

class App extends React.Component {
  render(){
    return (
      <div>
        <CreatePlaylist />        
        <PlaylistsList />
      </div>
    );
  }
}

export default App;

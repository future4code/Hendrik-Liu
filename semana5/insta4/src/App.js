import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className={'app-container'}>
          <Post
            nomeUsuario={'spotify'}
            fotoUsuario={'https://cdn.iconscout.com/icon/free/png-256/spotify-1682937-1440796.png'}
            fotoPost={'https://pbs.twimg.com/profile_images/1296540549663600640/UuIn1jKZ.jpg'}
          />
        </div>

        <div className={'app-container'}>
          <Post
            nomeUsuario={'twitch'}
            fotoUsuario={'https://pbs.twimg.com/profile_images/1219632422628798464/HYJSg-Xz_400x400.jpg'}
            fotoPost={'https://img.olhardigital.com.br/uploads/acervo_imagens/2020/08/r4x3/20200810125841_660_495_-_fall_guys__ultimate_knockout.jpg'}
          />
        </div>

        <div className={'app-container'}>
          <Post
            nomeUsuario={'netflix'}
            fotoUsuario={'https://icon-library.com/images/netflix-app-icon-png/netflix-app-icon-png-14.jpg'}
            fotoPost={'https://static1.purebreak.com.br/articles/2/88/37/2/@/334756-a-4-temporada-de-stranger-things-pode-amp_article_image-1.jpg'}
          />
        </div>
      </div>
    );
  }
}

export default App;

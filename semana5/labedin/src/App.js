import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://vignette.wikia.nocookie.net/p__/images/2/29/Dipper_Pines_appearance.png/revision/latest/top-crop/width/360/height/450?cb=20181007173409&path-prefix=protagonist" 
          nome="Mason 'Dipper' Pines" 
          descricao="Oi, eu sou o 'Dipper'. Sou um personagem fictício e um dos personagens principais da série Gravity Falls."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem="https://i.pinimg.com/564x/1f/5c/79/1f5c79832b4d0fddf889e3fc956a992c.jpg"
          info="E-mail"
          descricao="dipper@cabanadomisterio.com"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem="https://img2.gratispng.com/20180830/bww/kisspng-the-daily-dot-internet-logo-online-newspaper-5b8824be044753.2560879215356489580175.jpg"
          info="Endereço"
          descricao="Em algum lugar em Gravity Falls."
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências</h2>
        <CardGrande 
          imagem="https://pm1.narvii.com/6538/69d9ebf3c9409d39da87088aadbcea620ccfa15b_00.jpg" 
          nome="Cabana do Mistério" 
          descricao="Passei as minhas férias de verão junto com a minha irmã gêmea Mabel na Cabana do Mistério. Aqui, encontramos várias criaturas sobrenaturais e descobrimos vários segredos da cidade de Gravity Falls." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;

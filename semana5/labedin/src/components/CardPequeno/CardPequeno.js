import React from 'react';
import './CardPequeno.css';

function CardPequeno (props) {
    return(
        <div className="smallcard-container">
            <img src={ props.imagem } />
                <div>
                    <h4> { props.info }:</h4> 
                    <h4> { props.descricao }</h4> 
                </div>
        </div>
    )
}

export default CardPequeno;
import React from 'react';

function Etapa3 () {
    return (
        <div>
            <form>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>

                <h4>5. Por que você não terminou um curso de graduação?</h4>
                <input type='text' name='motivo'/>

                <h4>Você fez algum curso complementar?</h4>
                <select name='curso complementar'>
                    <option value='Nenhum'>Nenhum</option>
                    <option value='Curso técnico'>Curso técnico</option>
                    <option value='Inglês'>Inglês</option>
                </select>
            </form>
        </div>
    );
}

export default Etapa3;
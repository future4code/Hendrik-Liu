import React from 'react';

function Etapa1 () {
    return (
        <div>
            <form>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                
                <h4>1. Qual o seu nome?</h4>
                <input type='text' name='nome'></input>

                <h4>2. Qual a sua idade?</h4>
                <input type='text' name='idade'></input>

                <h4>3. Qual a sua escolaridade?</h4>
                <select name="escolaridade">
                    <option value="Ensino Médio incompleto">Ensino Médio incompleto</option>
                    <option value="Ensino Médio completo">Ensino Médio completo</option>
                    <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                    <option value="Ensino Superior Completo">Ensino Superior Completo</option>
                </select>
            </form>


        </div>
    );
}

export default Etapa1;

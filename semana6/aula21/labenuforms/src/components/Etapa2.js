import React from 'react';

function Etapa2 () {
    return (
        <div>
            <form>
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                
                <h4>5. Qual curso?</h4>
                <input type='text' name='curso'/>

                <h4>6. Qual a unidade de ensino?</h4>
                <input type='text' name='unidadeDeEnsino' />
            </form>
        </div>
    );
}

export default Etapa2;
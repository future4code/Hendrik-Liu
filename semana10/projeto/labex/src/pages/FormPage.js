import React from 'react';

const FormPage = () => {
  return (

    <div>
      <h2>Formulário</h2>
      <input type="text" placeholder="Nome do candidato"/>
      <input type="number" placeholder="Idade"/>
      <input type="text" placeholder="Descrição"/>
      <input type="text" placeholder="Profissão"/>
      <input type="text" placeholder="País"/>
      <buttton>Inscrever-se</buttton>
    </div>
  )
}

export default FormPage;
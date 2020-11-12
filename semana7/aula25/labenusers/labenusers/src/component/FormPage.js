import React from 'react';
import axios from 'axios';

class FormPage extends React.Component {
  state = {
    userValue: "",
    emailValue: ""
  }

  createUser = () => {
    const body = {
      name: this.state.userValue,
      email: this.state.emailValue
    };
    
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, { 
      headers: {
        Authorization: "hendrik-liu-dumont"
      }})
      
      .then((response) => {
        this.setState({ userValue: "", emailValue: "" });
        alert("Usuário cadastrado com sucesso.")})
      
        .catch((error) => {
        alert("Falha no cadastro.");
        console.log(error.message)
      })
  };

  onChangeUserValue = (event) => {
    this.setState({ userValue: event.target.value })
  }
    
  onChangeEmailValue = (event) => {
    this.setState({ emailValue: event.target.value })
  }

  render() {
    return (
      <div>
        <label>Nome</label>
        <input 
          placeholder="Username" 
          value={this.state.userValue} 
          onChange={this.onChangeUserValue} />
           
        <label>E-mail</label>
        <input 
          placeholder="e-mail" 
          value={this.state.emailValue}
          onChange={this.onChangeEmailValue} />

        <button onClick={this.createUser}>Salvar</button>
      </div>
    )
  }
}

export default FormPage;
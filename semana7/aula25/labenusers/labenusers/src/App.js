import React from "react";
import './App.css';
import axios from "axios";

class App extends React.Component {
  state = {
    users: [],
    userValue: "",
    emailValue: ""
  };

  createUser = () => {
    const body = {
      name: this.state.userValue,
      email: this.state.emailValue
    };

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, { 
      headers: {
        Authorization: "hendrik-liu-dumont"
      }
    }) 
    
    .then((response) => {
      this.setState({ userValue: "", emailValue: "" });
      alert("Usuário cadastrado com sucesso.");
    })
    .catch((error) => {
      alert("Falha no cadastro.");
      console.log(error.message)
    })
  };

  getAllUsers = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: "hendrik-liu-dumont"
      }
    })

    .then((response) => { 
      this.setState({ users: response.data })
    })
    .catch((error) => {
      console.log(error.message)
    })
  }

  componentDidMount = () => {
    this.getAllUsers();
  }

  onChangeUserValue = (event) => {
    this.setState({ userValue: event.target.value })
  }

  onChangeEmailValue = (event) => {
    this.setState({ emailValue: event.target.value })
  }

  render() {
    const renderedUsers = this.state.users.map((user) => {
      return (
        <div>
          <p key={user.id}> USUÁRIO: {user.name} </p>
        </div>
    )})

    return (
      <div className="App">
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
        {renderedUsers}
        <button>Deletar</button>
      </div>
    );
  }
}

export default App;

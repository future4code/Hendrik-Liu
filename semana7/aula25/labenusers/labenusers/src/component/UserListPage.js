import React from 'react';
import axios from 'axios';

class UserListPage extends React.Component {
  state = {
    users: [],
  }

  componentDidMount = () => {
    this.getAllUsers();
  }

  getAllUsers = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: "hendrik-liu-dumont"
      }
    }).then((response) => { 
      this.setState({ users: response.data })
    }).catch((error) => {
      console.log(error.message)
    })
  }

  deleteUser = (userId) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, {
      headers: {
        Authorization: "hendrik-liu-dumont"
      }
    }).then((response) => {
      alert("Usuário deletado.")
      this.getAllUsers()
    }).catch((error) => {
      alert("Erro ao deletar o usuário.")
      console.log(error.message)
    })
  }

  render() {
    const renderUserList = this.state.users.map((user) => {
      return (
        <div>
          <p key={user.id}> {user.name} </p>
          <button onClick={() => this.deleteUser(user.id)}> Deletar </button>
        </div>
      )
    })

    return(
      <div>
        {renderUserList}
      </div>
    )
  }
}

export default UserListPage;
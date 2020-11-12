import React from "react";
import './App.css';
import axios from "axios";
import FormPage from './component/FormPage';
import UserListPage from './component/UserListPage';

class App extends React.Component {
  state = {
    formPage: true
  };

  changePage = () => {
    this.setState({ formPage: !this.state.formPage})
  };

  render() {
    const currentPage = this.state.formPage ? <FormPage /> : <UserListPage />

    return (
      <div className="App">
        { currentPage }
        <button onClick={this.changePage}> Mudar de página </button>
      </div>
    );
  }
}

export default App;

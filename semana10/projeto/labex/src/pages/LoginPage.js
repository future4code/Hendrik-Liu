import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      history.push("/trips/list");
    }
    
  }, [history]);

  const login = () => {  
    
    const body = {
      email: email,
      password: password
    }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/hendrik-dumont/login", body)
    .then((response) => {
      localStorage.setItem("token", response.data.token)
      history.push("/trips/list")
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div>
      <h2>Login</h2>
      <input type="email" value={email} onChange={handleEmail} placeholder="email" required/>
      <input type="password" value={password} onChange={handlePassword} placeholder="senha" required/>
      <button onClick={login}> Entrar </button>
    </div>
  )
}

export default LoginPage;
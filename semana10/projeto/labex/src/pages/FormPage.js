import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import useForm from '../hooks/useForm';

const FormPage = () => {
  const history = useHistory()
  const [getTripsList, setGetTripsList] = useState([])
  const { form, onChange, resetState } = useForm({
    name: "",
    age: 0,
    applicationText: "",
    profession: "",
    country: "",
    trip: ""
  })

  useEffect(() => {
    getTrips();
  }, []);

  const applyToTrip = () => {
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
      trip: form.trip 
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/hendrik-dumont/trips/:id/apply', body, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
    .then((response) => {
      console.log(response);
      alert("Inscrição enviada!")
    })
    .catch((error) => {
      console.log(error.message)
    })
  }

  const getTrips = () => {
    axios.get ('https://us-central1-labenu-apis.cloudfunctions.net/labeX/hendrik-liu/trips')
    .then((response) => {
      setGetTripsList(response.data.trips)
    })
    .catch((error) => {
      console.log(error.message)
    })
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    onChange(name, value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    applyToTrip()
    resetState()
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulário</h2>
      <input 
        type={"text"} 
        name={"name"} 
        value={form.name}
        onChange={handleInputChange} 
        placeholder={"Nome do candidato"}
        pattern={"(\D{3,}\s*)"}
        required
      />
      <input 
        type={"number"}
        name={"age"} 
        value={form.age} 
        onChange={handleInputChange} 
        placeholder={"Idade"}
        min={"18"}
        required
      />
      <input 
        type={"text"}
        name={"applicationText"} 
        value={form.applicationText} 
        onChange={handleInputChange} 
        placeholder={"Descrição"}
        pattern={"\D{30,}\s*"}
        required
      />
      <input 
        type={"text"}
        name={"profession"} 
        value={form.profession} 
        onChange={handleInputChange} 
        placeholder={"Profissão"}
        pattern={"\D{10,}\s*"}
        required
        />
      <input 
        type={"text"}
        name={"country"}
        value={form.country} 
        onChange={handleInputChange}
        placeholder={"País"}
        required
      />

      <button>Inscrever</button>
    </form>
  )
}

export default FormPage;
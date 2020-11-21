import React from 'react';
import useForm from "../hooks/useForm"
import axios from 'axios';
import useProtectedPage from "../hooks/useProtectedPage"

const CreateTripPage = () => {
  
  useProtectedPage()

  const createTrip = () => {
    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.durationInDays
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/hendrik-dumont/trips', body, {
      headers: {
        auth: localStorage.getItem("token")
      }
    })
    .then((response) => {
      console.log(response)
      alert("Viagem criada.")
    })
    .catch((error) => {
      console.log(error.message)
    })
  }

  const { form, onChange, resetState } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: 0
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    createTrip()
    resetState()
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Nova viagem</h2>
      <input 
        type="text"
        name={"name"}
        value={form.name}
        onChange={handleInputChange}
        pattern="(\D{3,}\s*)"
        placeholder="nome"
        title="Mínimo 3 letras" 
        required
      />
      <select
        name={"planet"}
        value={form.planet}
        onChange={handleInputChange}
        required
      >
        <option>Mercúrio</option>
        <option>Vênus</option>
        <option>Terra</option>
        <option>Marte</option>
        <option>Júpiter</option>
        <option>Saturno</option>           
        <option>Urano</option>
        <option>Netuno</option>
        <option>Ceres</option>
        <option>Plutão</option>
        <option>Haumea</option>
        <option>Makemake</option>
        <option>Éris</option>
      </select>
      <input 
        type="date"
        name={"date"}
        value={form.date}
        onChange={handleInputChange}
        required 
      />
      <input 
        type="text"
        name={"description"}
        value={form.description}
        onChange={handleInputChange}
        pattern="\D{30,}\s*"
        placeholder="descrição"
        title="Mínimo 30 letras"
        required 
      />
      <input 
        type="number"
        name={"durationInDays"}
        value={form.durationInDays}
        onChange={handleInputChange}
        min={50}
        title="Mínimo 50 dias"
        required 
      />
      <button>Nova Viagem</button>  
  </form>
  )
}

export default CreateTripPage;
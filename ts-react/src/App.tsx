import { useState } from 'react'
import './App.css'
import moment from 'moment'

function App() {
  const [date, setDate] = useState("")
  const [phone, setPhone] = useState("")
  const [hour, setHour] = useState("")
  const [name, setName] = useState("")
  const dateBr = moment(date).format('DD/MM/YYYY')

  async function changeMessage() {
    const GZAPPY_URL = "https://api.gzappy.com/v1/message/send-message"
    const response = await fetch(GZAPPY_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'user_token_id': "33a47e5d-6aba-4f13-97f8-518f7aab48c0"
    },
    body: JSON.stringify({
      instance_id: "YLWZJNDDL9MREIV3176GRX76",
      instance_token: "f2d21d96-9deb-4bb9-8d3c-8e2fe23116f4",
      message: ["Olá, " + name, "Seu horario foi agendado para dia: " + dateBr + " as " + hour, "Mostrar esse comprovante no ato de visita a barbearia."],
      phone: "55" + phone,
    }),
    })

  const data = await response.json()
  
  console.log(data)
  setDate("")
  setHour("")
  setName("")
  setPhone("")
  console.log('Mandado')

}

  return (
    <div className='main'>
      <div className='container-inf'>
        <h1>Escreva abaixo seu nome, o dia e o horario da sua visita a barbearia</h1>
        <div className='formulario'>
          <h2>Nome</h2>
          <input type="text" value={name} placeholder='José' onChange={(e) => {
            setName(e.target.value)
          }}/>
          <h2>Contato</h2>
          <input type="text" value={phone} placeholder='69 99999-9999' onChange={(e) => {
            setPhone(String(e.target.value))
          }}/>
          <h2>Data</h2>
          <input type="date" value={date}  placeholder='00/00/0000, as 00:00' onChange={(e) => {
            setDate(e.target.value)
          }}/>
          <h2>Horario</h2>
          <input type="time" value={hour} placeholder='as 00:00' onChange={(e) => {
            setHour(e.target.value)
          }}/>
          <button type="button" onClick={() => {
            changeMessage()
          }}>Marcar</button>
        </div>
      </div>
      
    </div>
  )
}

export default App

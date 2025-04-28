//import { useState } from 'react'

import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from '../src/paginas/home/Home'
import Login from '../src/paginas/login/Login'
import Cadastro from '../src/paginas/cadastro/Cadastro'
import Agendamento from '../src/paginas/Agendamento/Agendamento'

function App() {
  return (
    //const [count, setCount] = useState(0)
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/agendamento" element={<Agendamento />} />
      </Routes>
    </div>
  )
}

export default App

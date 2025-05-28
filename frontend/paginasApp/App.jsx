//import { useState } from 'react'

import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from '../src/paginas/home/Home'
import Login from '../src/paginas/login/Login'
import Cadastro from '../src/paginas/cadastro/Cadastro'
import Agendamento from '../src/paginas/Agendamento/Agendamento'
import Sobre from '../src/paginas/sobre/sobre'
import Calendario from '../src/paginas/calendario/calendario'
import Perfil from '../src/paginas/Perfil/Perfil'
import EditarPerfil from '../src/paginas/editarPerfil/EditarPerfil'

function App() {
  return (
    //const [count, setCount] = useState(0)
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/agendamento" element={<Agendamento />} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/calendario" element={<Calendario/>} />
        <Route path="/perfil" element={<Perfil/>} />
        <Route path="/editarperfil" element={<EditarPerfil/>} />
      </Routes>
    </div>
  )
}

export default App

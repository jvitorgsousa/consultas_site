import { Link } from 'react-router-dom';
//import { useState } from 'react';
import Botao from "../../componentes/Botao";
import Input from "../../componentes/Input";
import { Search } from 'lucide-react';
import { Bell } from "lucide-react";
import AddAgendamentos from '../../componentes/ComponenteAgendamento/AddAgendamentos';
import ListaAgendamentos from '../../componentes/ComponenteAgendamento/ListaAgendamentos';
import styles from './Agendamento.module.css'


function Agendamento(){
  return(   
  <div>
      <div className={styles.container}>
  
          <div className={styles.logo}>
              <img src="/imagens/logo_pequena.png" alt="Logo" />
          </div>

          <header className={styles.header}>
              
              <nav className={styles.nav}>
              <ul>
                  <li><Link to="/agendamento">AGENDAR CONSULTA</Link></li>
                  <li><Link to="/calendario">CALENDÁRIO MÉDICO</Link></li>
                  <li><Link to="/cadastro">CADASTRAR-SE</Link></li>
                  <li><Link to="/login">LOGIN</Link></li>
                  <li ><Link to="/sobre">SOBRE</Link></li>
              </ul>
              </nav>

              <div className={styles.search}>
              <Input textoInput="" />
              <Botao Icone = {Search}/>
              </div>
          </header>
                 
            
          <main className={styles.hero}>
  <h1 className={styles.titulo}>Agendar Consultas</h1> {/* Fora do banner */}

  <div className={styles.banner}>
    <p className={styles.bannerTitle}>Procure um especialista!</p>
    <div className={styles.bannerSearch}>
      <Input textoInput="Nome ou especialidade" />
      <Botao Icone={Search} />
    </div>
  </div>
</main>
              <div className= {styles.Status_da_Consulta}>

              </div>

      </div>
  </div>
)
}
export default Agendamento

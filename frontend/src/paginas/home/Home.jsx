import { Link } from 'react-router-dom'
import Botao from "../../componentes/Botao"
import Input from "../../componentes/Input"
import {Search} from 'lucide-react'
import styles from './Home.module.css'

function Home() {
  return (
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
            <li ><Link to="/perfil">PERFIL</Link></li>
          </ul>
        </nav>
        <div className={styles.search}>
          <Input textoInput="" />
          <Botao Icone = {Search}/>
        </div>
      </header>

      <main className={styles.hero}>
        <div className={styles.hero_text}>
          <h1>CONECTANDO VOCÊ AO CUIDADO QUE VOCÊ MERECE!</h1>
          <br />
          <h2>O SALUS CARE TORNA O AGENDAMENTO DA SUA CONSULTA AINDA MAIS FÁCIL, ELIMINANDO AS LONGAS FILAS E OTIMIZANDO SEU TEMPO.</h2>
          <br />
          <hr className={styles.bar}/>
          <br />
          <Link className={styles.button} to="/agendamento">
            Agendar Consulta
          </Link>
        </div>

        <section className={styles.hero_image}>
          <img src="/imagens/logo_grande.png" alt="Logo grande" />
        </section>
      </main>
    </div>
  )
}

export default Home
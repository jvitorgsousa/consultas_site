import { Link } from 'react-router-dom'
import Botao from "../../componentes/Botao"
import Input from "../../componentes/Input"
import {Search} from 'lucide-react'
import styles from './Sobre.module.css'

function Sobre() {
    return(
    <div>
        <div className={styles.container}>
      
      <div className={styles.logo}>
        <img src="/imagens/logo_pequena.png" alt="Logo" />
      </div>

      <header className={styles.header}>
        
        <nav className={styles.nav}>
          <ul>
            <li ><Link to="/">INICIO</Link></li>
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
        <h1>Sobre nos</h1>
        <hr className={styles.bar}/>
        <div>
            <h2>BEM-VINDO AO SALUS CARE!</h2>
            <p>No SalusCare, acreditamos que a saúde e o bem-estar dos nossos pacientes vêm em primeiro lugar. Nossa missão é oferecer um atendimento de excelência, combinando tecnologia, conforto e um time de profissionais altamente qualificados para cuidar de você e da sua família.</p>
            <h3>NOSSA EQUIPE</h3>
            <p>Contamos com uma equipe de especialistas nas mais diversas áreas da saúde, prontos para oferecer diagnósticos precisos e tratamentos personalizados. Nossa equipe é formada por profissionais experientes e apaixonados pelo que fazem, garantindo um atendimento humanizado e de qualidade.</p>
            <h4>ESPECIALIDADES</h4>
            <p>Atendemos diversas especialidades médicas, incluindo:<br/>
             ✅ Cardiologia <br/>✅ Dermatologia <br/> ✅ Ortopedia <br/> ✅ Pediatria <br/> ✅ Ginecologia e Obstetrícia <br/> ✅ Clínica Geral <br/> ✅ Entre outras</p>

             <h4>INFRAESTRUTURA E TECNOLOGIA</h4>
             <p>Contamos com uma equipe de especialistas nas mais diversas áreas da saúde, prontos para oferecer diagnósticos precisos e tratamentos personalizados. Nossa equipe é formada por profissionais experientes e apaixonados pelo que fazem, garantindo um atendimento humanizado e de qualidade.</p>
             <h4>POR QUE ESCOLHER O SALUS CARE?</h4>
             <p>
                ✔ Atendimento humanizado e personalizado <br/>
                ✔ Equipe médica altamente qualificada <br/>
                ✔ Tecnologia e equipamentos de ponta <br/>
                ✔ Facilidade no agendamento de consultas <br/>
                ✔ Aceitamos diversos convênios <br/>
            </p>
            <h4>ONDE ESTAMOS?</h4>
            <p> 📍 Endereço: [Rua, número, bairro, cidade] <br/>
                📞 WhatsApp: [Número de contato] <br/>
                📧 E-mail: [E-mail para contato] <br/>
                🕒 Horário de Atendimento: [Dias e horários de funcionamento]
            </p>
        </div>
        

        
      </main>
    </div>
    
  </div>
  )  
}
export default Sobre
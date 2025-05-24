import { Link } from 'react-router-dom';
import { useState } from 'react';
import Botao from "../../componentes/Botao";
import Input from "../../componentes/Input";
import { Search } from 'lucide-react';
import { Bell } from "lucide-react";
import AddAgendamentos from '../../componentes/ComponenteAgendamento/AddAgendamentos';
import ListaAgendamentos from '../../componentes/ComponenteAgendamento/ListaAgendamentos';
import styles from './Agendamento.module.css'

function Agendamento() {
  const [consulta, setConsulta] = useState([
    {
      id: 1,
      title: "Cardiologista",
      hora: "8 horas",
      periodo: "noturno",
      data: "16/5/2025",
      description: "Dores forte no peito",
      isCompleted: false
    }
  ]);

  function onConsultaClick(consultaId) {
    const novasConsultas = consulta.map(item => {
      if (item.id === consultaId) {
        return { ...item, isCompleted: !item.isCompleted };
      } else {
        return item;
      }
    });
    setConsulta(novasConsultas);
  }

  function onDeleteConsultaClick(consultaId) {
    const novasConsultas = consulta.filter(item => item.id !== consultaId);
    setConsulta(novasConsultas);
  }

  function onAddConsulta (title, hora, periodo, data, description){
    const novasConsultas = {
        id: consulta.length +1,
        title: title,
        hora: hora,
        periodo:periodo,
        data: data,
        description: description,
        isCompleted: false,
    };
    setConsulta([...consulta, novasConsultas])
  }

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img  src="/imagens/logo_pequena.png" alt="Logo" />
      </div>
      
      <header className={styles.cabeçalho}>
        
        <nav className={styles.nav}>
          <ul>
            <li><Link to="/calendario">CALENDÁRIO MÉDICO</Link></li>
            <li><Link to="/cadastro">CADASTRAR-SE</Link></li>
            <li><Link to="/sobre">SOBRE</Link></li>
          </ul>
        </nav>
        <div className={styles.search}>
          <Input textoInput = "" />
          <Botao Icone = {Search} />
          <Botao Icone = {Bell }/>
        </div>
      </header>

      <main className = {styles.hero}>
        <p className = {styles.titulo1}>AGENDAR CONSULTA</p>
        <section className = {styles.section_Hero}>
            <div className={styles.hero_text}>
              
              <div className = {styles.hero_imagem}>
                <p className = {styles.titulo2}> Procure um especialista! </p>
              </div>
              
            </div>
        </section>

        <div className = {styles.Add_Agendamento} >
          <div className = {styles.input_Agendamento}>
            <AddAgendamentos AddConsulta = {onAddConsulta}/>
          </div>
          
          <div className = {styles.Agendamento}>
            <ListaAgendamentos
              consulta={consulta}
              onConsultaClick={onConsultaClick}
              onDeleteConsultaClick={onDeleteConsultaClick}
            />
          </div>
        </div>
        
      </main>

      
    </div>
  );
}

export default Agendamento;
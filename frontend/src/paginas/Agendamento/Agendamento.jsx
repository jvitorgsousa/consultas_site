import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Botao from "../../componentes/Botao";
import Input from "../../componentes/Input";
import { Search } from 'lucide-react';
import styles from './Agendamento.module.css';

function Agendamento() {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/agendamentos')
      .then(response => {
        setAgendamentos(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar agendamentos:', error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="/imagens/logo_pequena.png" alt="Logo" />
      </div>

      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul>
            <li><Link to="/">INICIO</Link></li>
            <li><Link to="/calendario">CALENDÁRIO MÉDICO</Link></li>
            <li><Link to="/cadastro">CADASTRAR-SE</Link></li>
            <li><Link to="/login">LOGIN</Link></li>
            <li><Link to="/sobre">SOBRE</Link></li>
          </ul>
        </nav>

        <div className={styles.search}>
          <Input textoInput="" />
          <Botao Icone={Search} />
        </div>
      </header>

      <main className={styles.hero}>
        <h1 className={styles.titulo}>Agendar Consultas</h1>

        <div className={styles.banner}>
          <p className={styles.bannerTitle}>Procure um especialista!</p>
          <div className={styles.bannerSearch}>
            <Input textoInput="Nome ou especialidade" />
            <Botao Icone={Search} />
          </div>
        </div>

        <div className={styles.Status_da_Consulta}>
          <h2>Consultas Agendadas</h2>
          {agendamentos.length === 0 ? (
            <p>Nenhuma consulta agendada.</p>
          ) : (
            <ul>
              {agendamentos.map((item) => (
                <li key={item.id} className={styles.consultaItem}>
                  <strong>{item.paciente}</strong> com <strong>{item.medico}</strong> em <strong>{item.data}</strong>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
}

export default Agendamento;
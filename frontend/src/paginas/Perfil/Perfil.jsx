import { Link } from 'react-router-dom';
//import { useState } from 'react';
import Botao from "../../componentes/Botao";
import Input from "../../componentes/Input";
import { Search } from 'lucide-react';
import { Bell } from "lucide-react";
import styles from './Perfil.module.css'

function Perfil(){
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
                    <li ><Link to="/editarperfil">EDITAR PERFIL</Link></li>
                </ul>

                </nav>
                <div className={styles.search}>
                <Input textoInput="" />
                <Botao Icone = {Search}/>
                </div>
            </header>

                <main className={styles.hero}>
                    <div>
                        
                    </div>
                </main>

        </div>
    
    </div>
    )
}
export default Perfil
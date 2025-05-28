import { Link } from 'react-router-dom'
import Botao from "../../componentes/Botao"
import Input from "../../componentes/Input"
import {Search} from 'lucide-react'
import styles from './Calendario.module.css'

function calendario() {
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
                        <div className={styles.calendario}>
                            <h1>Calendario Médico</h1>
                            <div className={styles.domingo}>
                                <h2>Domingo</h2>
                                <p>
                                    Dr. Ajemiro Silva - 9h às 12h <br/>
                                    Dra. Mileide Costa - 13h às 17h <br/>
                                    Dr. Nosferatu Teixeira - 18h às 23h <br/>
                                </p>
                            </div>
                            <div className={styles.segunda}>
                                <h2>Segunda-Feira</h2>
                                <p>
                                Dra. Amary De Lilicay - 9h às 12h <br/>
                                Dra. Lilian Eliane - 13h às 17h <br/>
                                Dr. Gregorio Hauss - 18h às 23h <br/>
                                </p>
                            </div>
                            <div className = {styles.terça}>
                                <h2>Terça-Feira</h2>
                                <p>
                                    Dr. Jacinto Pinto - 9h às 12h <br/>
                                    Dra. Morganinha CCREI - 13h às 17h <br/>
                                    Dr. Alucard da Silva - 18h às 23h <br/>
                                </p>
                            </div>
                            <div className = {styles.quarta}>
                                <h2>Qarta-Feira</h2>
                                <p>
                                Dr. Trapper do Basement - 9h às 12h <br/>
                                Dra. Claudette Morel - 13h às 17h <br/>
                                Dr. Maniaco do Parque - 18h às 23h <br/>
                                </p>
                            </div>
                            <div className = {styles.quinta}>
                                <h2>Quinta-Feira</h2>
                                <p>
                                Dra. Ju Menta - 9h às 12h <br/>
                                Dra. Deide Costa - 13h às 17h <br/>
                                Dr. Jacinto Leite - 18h às 23h <br/>
                                </p>
                            </div>
                            <div className={styles.sexta}>
                                <h2>Sexta-Feira</h2>
                                <p>
                                Dr. Singed do LOL - 9h às 12h <br/>
                                Dra. Dango Balango - 13h às 17h <br/>
                                Dr. Who - 18h às 23h <br/>
                                </p>
                            </div>
                            <div className={styles.sabado}>
                                <h2>Sabado</h2>
                                <p>
                                Dr. Doctor do DBD - 9h às 12h <br/>
                                Dr. TTV TheAkarui - 13h às 17h <br/>
                                Dr. Cadu Chuta Gen 1% - 18h às 23h <br/>
                                </p>
                            </div>
                            
                        </div>

                        <div className = {styles.info_medicos}>
                            <div className= {styles.info_titulo}> <h1>INFORMAÇÕES SOBRE OS MÉDICOS</h1> </div>
                            <h3>Dr. Ajemiro Silva</h3>
                            <p>
                                Especialista em Clínica Geral com mais de 20 anos de experiência. Conhecido por sua abordagem humanizada e atenção aos detalhes, o Dr. Ajemiro é referência no tratamento de doenças crônicas e prevenção de saúde.
                            </p>
                            <h3>Dra. Mileide Costa</h3>
                            <p>
                                Pediatra dedicada e carismática, a Dra. Mileide é apaixonada por cuidar de crianças e adolescentes. Com uma abordagem lúdica e acolhedora, ela transforma consultas em momentos de confiança e aprendizado para os pequenos pacientes.
                            </p>
                            <h3>Dr. Nosferatu Teixeira</h3>
                            <p>
                                Hematologista com expertise em doenças do sangue e transfusões. Apesar do nome peculiar, o Dr. Nosferatu é extremamente competente e atencioso, garantindo tratamentos precisos e eficazes para seus pacientes
                            </p>
                            <h3>Dra. Amary De Lilicay</h3>
                            <p>
                                Dermatologista renomada, especializada em tratamentos estéticos e dermatológicos avançados. 
                            </p>
                        </div>
                    </main>

            </div>
        
        </div>
    )  
}
export default calendario
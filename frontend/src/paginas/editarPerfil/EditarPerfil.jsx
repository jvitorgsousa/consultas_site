import { Link } from 'react-router-dom';
//import { useState } from 'react';
import Botao from "../../componentes/Botao";
import Input from "../../componentes/Input";
import { Search } from 'lucide-react';
import { Bell } from "lucide-react";
import styles from './EditarPerfil.module.css'

function EditarPerfil(){
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
            
            <section className={styles.hero}>
                <main className= {styles.formulario}>
                    <h1>EDITAR INFORMAÇÕES</h1>
                    <div className={styles.dados_pessoais}>
                        <h5 className={styles.categoria}>Dados Pessoais</h5>
                        <div className={styles.email_input + styles.input_completo}>
                            <p>E-mail</p>
                            <Input tipoInput="text" textoInput="..." />
                        </div>
        
                        <div className={styles.dois_input}>
                            <div className={styles.nome_input}>
                                <p>Nome</p>
                                <Input tipoInput="text" textoInput="..." />
                            </div>
        
                            <div className={styles.sobrenome_input}>
                                <p>Sobrenome</p>
                                <Input tipoInput="text" textoInput="..." />
                            </div>
                        </div>
        
                        <div className={styles.dois_input}>
                            <div className={styles.nascimento_input}>
                                <p>Data de Nascimento</p>
                                <input type="date" />
                            </div>
        
                            <div className={styles.genero_input}>
                                <p>Gênero</p>
                                <Input tipoInput="text" textoInput="..." />
                            </div>
                        </div>
        
                        <div className={styles.dois_input}>
                            <div className={styles.cpf_input}>
                                <p>CPF</p>
                                <Input tipoInput="text" textoInput="..." />
                            </div>
                
                            <div className={styles.telefone_input}>
                                <p>Telefone</p>
                                <Input tipoInput="text" textoInput="..." />
                            </div>
                        </div>
        
                        <div className={styles.senha_input}>
                            <p>Senha</p>
                            <Input tipoInput="text" textoInput="..." />
                        </div>
        
                        <div className={styles.confirmar_senha}>
                            <p>Confirmar Senha</p>
                            <Input tipoInput="text" textoInput="..." />
                        </div>
                    </div>
        
                    <div className={styles.endereco}>
                        <h5 className={styles.categoria}>Endereço</h5>
        
                        <div className={styles.cep_rua}>
                            <div className={styles.cep_input}>
                                <p>CEP</p>
                                <Input tipoInput="text" textoInput="..." />
                            </div>
        
                            <div className={styles.rua_input}>
                                <p>Rua</p>
                                <Input tipoInput="text" textoInput="..." />
                            </div>
                        </div>
        
                        <div className={styles.bairro_n}>
                            <div className= {styles.bairro_input}>
                                <p>Bairro</p>
                                <Input tipoInput="text" textoInput="..." />
                            </div>
                
                            <div className={styles.n_input}>
                                <p>N°</p>
                                <Input tipoInput="text" textoInput="..." />
                            </div>
                        </div>
        
                        <div className= {styles.cidade_estado}>
                            <div className={styles.cidade_input}>
                                <p>Cidade</p>
                                <Input tipoInput="text" textoInput="..." />
                            </div>
                
                            <div className={styles.estado_input}>
                                <p>Estado</p>
                                <Input tipoInput="text" textoInput="..." />
                            </div>
                        </div>
        
                        <div className={styles.complemento_input}>
                            <p>Complemento</p>
                            <Input tipoInput="text" textoInput="..." />
                        </div>
                    </div>
        
                    <div className={styles.salvar_botao}>
                        <Botao textoBotao = "Salvar"/>
                    </div>

                </main>
            </section>

        </div>
    
    </div>
    )
}
export default EditarPerfil

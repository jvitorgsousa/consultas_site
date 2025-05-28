import { Link } from 'react-router-dom'
import styles from './Cadastro.module.css';
import Botao from "../../componentes/Botao"
import Input from "../../componentes/Input"

function Cadastro() {
    return (
      <section className={styles.hero}>
        <div className={styles.imagemB}>
          <img src="/public/imagens/logo_branca.png" alt="Logo" />
        </div>
  
        <main className= {styles.formulario}>
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

            <p>
               <Link to = "/Login">Já tem conta?</Link>
            </p>

          </div>

        </main>

      </section>
    );
  }
  
  export default Cadastro;
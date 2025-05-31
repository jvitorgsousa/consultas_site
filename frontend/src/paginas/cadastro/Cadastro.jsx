import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Cadastro.module.css';
import Botao from "../../componentes/Botao";
import Input from "../../componentes/Input";

function Cadastro() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    emailPaciente: '',
    nomePaciente: '',
    sobrenomePaciente: '',
    dataNascimento: '',
    generoPaciente: '',
    cpfPaciente: '',
    telefonePaciente: '',
    senhaPaciente: '',
    confirmarSenha: '',
    cep: '',
    rua: '',
    bairro: '',
    numero: '',
    cidade: '',
    estado: '',
    complemento: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.senhaPaciente !== formData.confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    const enderecoPaciente = {
      cep: formData.cep,
      rua: formData.rua,
      bairro: formData.bairro,
      numero: formData.numero,
      cidade: formData.cidade,
      estado: formData.estado,
      complemento: formData.complemento
    };

    try {
      await axios.post('http://localhost:3001/cadastro', {
        cpfPaciente: formData.cpfPaciente,
        nomePaciente: formData.nomePaciente + ' ' + formData.sobrenomePaciente,
        dataNascimento: formData.dataNascimento,
        emailPaciente: formData.emailPaciente,
        senhaPaciente: formData.senhaPaciente,
        telefonePaciente: formData.telefonePaciente,
        generoPaciente: formData.generoPaciente,
        enderecoPaciente
      });

      alert('Cadastro realizado com sucesso!');
      navigate('/login');
    } catch (error) {
      alert('Erro ao cadastrar: ' + error.response?.data?.error || error.message);
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.imagemB}>
        <img src="/public/imagens/logo_branca.png" alt="Logo" />
        <Link to="/" className={styles.botaoVoltar}>
          Voltar
        </Link>  
      </div>

      <main className={styles.formulario}>
        <form onSubmit={handleSubmit}>
          <div className={styles.dados_pessoais}>
            <h5 className={styles.categoria}>Dados Pessoais</h5>

            <div className={styles.email_input + styles.input_completo}>
              <p>E-mail</p>
              <Input tipoInput="text" textoInput="..." name="emailPaciente" value={formData.emailPaciente} onChange={handleChange} />
            </div>

            <div className={styles.dois_input}>
              <div className={styles.nome_input}>
                <p>Nome</p>
                <Input tipoInput="text" textoInput="..." name="nomePaciente" value={formData.nomePaciente} onChange={handleChange} />
              </div>

              <div className={styles.sobrenome_input}>
                <p>Sobrenome</p>
                <Input tipoInput="text" textoInput="..." name="sobrenomePaciente" value={formData.sobrenomePaciente} onChange={handleChange} />
              </div>
            </div>

            <div className={styles.dois_input}>
              <div className={styles.nascimento_input}>
                <p>Data de Nascimento</p>
                <input type="date" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} />
              </div>

              <div className={styles.genero_input}>
                <p>Gênero</p>
                <Input tipoInput="text" textoInput="..." name="generoPaciente" value={formData.generoPaciente} onChange={handleChange} />
              </div>
            </div>

            <div className={styles.dois_input}>
              <div className={styles.cpf_input}>
                <p>CPF</p>
                <Input tipoInput="text" textoInput="..." name="cpfPaciente" value={formData.cpfPaciente} onChange={handleChange} />
              </div>

              <div className={styles.telefone_input}>
                <p>Telefone</p>
                <Input tipoInput="text" textoInput="..." name="telefonePaciente" value={formData.telefonePaciente} onChange={handleChange} />
              </div>
            </div>

            <div className={styles.senha_input}>
              <p>Senha</p>
              <Input tipoInput="password" textoInput="..." name="senhaPaciente" value={formData.senhaPaciente} onChange={handleChange} />
            </div>

            <div className={styles.confirmar_senha}>
              <p>Confirmar Senha</p>
              <Input tipoInput="password" textoInput="..." name="confirmarSenha" value={formData.confirmarSenha} onChange={handleChange} />
            </div>
          </div>

          <div className={styles.endereco}>
            <h5 className={styles.categoria}>Endereço</h5>

            <div className={styles.cep_rua}>
              <div className={styles.cep_input}>
                <p>CEP</p>
                <Input tipoInput="text" textoInput="..." name="cep" value={formData.cep} onChange={handleChange} />
              </div>

              <div className={styles.rua_input}>
                <p>Rua</p>
                <Input tipoInput="text" textoInput="..." name="rua" value={formData.rua} onChange={handleChange} />
              </div>
            </div>

            <div className={styles.bairro_n}>
              <div className={styles.bairro_input}>
                <p>Bairro</p>
                <Input tipoInput="text" textoInput="..." name="bairro" value={formData.bairro} onChange={handleChange} />
              </div>

              <div className={styles.n_input}>
                <p>N°</p>
                <Input tipoInput="text" textoInput="..." name="numero" value={formData.numero} onChange={handleChange} />
              </div>
            </div>

            <div className={styles.cidade_estado}>
              <div className={styles.cidade_input}>
                <p>Cidade</p>
                <Input tipoInput="text" textoInput="..." name="cidade" value={formData.cidade} onChange={handleChange} />
              </div>

              <div className={styles.estado_input}>
                <p>Estado</p>
                <Input tipoInput="text" textoInput="..." name="estado" value={formData.estado} onChange={handleChange} />
              </div>
            </div>

            <div className={styles.complemento_input}>
              <p>Complemento</p>
              <Input tipoInput="text" textoInput="..." name="complemento" value={formData.complemento} onChange={handleChange} />
            </div>
          </div>

          <div className={styles.salvar_botao}>
            <Botao textoBotao="Salvar" />
            <p><Link to="/Login">Já tem conta?</Link></p>
          </div>
        </form>
      </main>
    </section>
  );
}

export default Cadastro;
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Botao from "../../componentes/Botao";
import Input from "../../componentes/Input";
import { Search, Bell } from 'lucide-react';
import styles from './Perfil.module.css';

function Perfil() {
  const [paciente, setPaciente] = useState({
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

  // Simulação: cpf para buscar paciente. Pode ser substituído pela lógica real de autenticação
  const cpfPaciente = '123.456.789-10';

  useEffect(() => {
    // Função para buscar dados do paciente do backend
    async function buscarPaciente() {
      try {
        const response = await fetch(`http://localhost:3000/api/pacientes/get/${cpfPaciente}`);
        if (!response.ok) throw new Error('Erro ao buscar paciente');
        const data = await response.json();

        setPaciente({
          emailPaciente: data.emailPaciente || '',
          nomePaciente: data.nomePaciente ? data.nomePaciente.split(' ')[0] : '',
          sobrenomePaciente: data.nomePaciente ? data.nomePaciente.split(' ').slice(1).join(' ') : '',
          dataNascimento: data.dataNascimento ? data.dataNascimento.substring(0,10) : '', // formato yyyy-mm-dd
          generoPaciente: data.generoPaciente || '',
          cpfPaciente: data.cpfPaciente || '',
          telefonePaciente: data.telefonePaciente || '',
          senhaPaciente: '',
          confirmarSenha: '',
          cep: data.enderecoPaciente?.cep || '',
          rua: data.enderecoPaciente?.rua || '',
          bairro: data.enderecoPaciente?.bairro || '',
          numero: data.enderecoPaciente?.numero || '',
          cidade: data.enderecoPaciente?.cidade || '',
          estado: data.enderecoPaciente?.estado || '',
          complemento: data.enderecoPaciente?.complemento || '',
        });
      } catch (error) {
        console.error(error);
      }
    }

    buscarPaciente();
  }, []);


  function handleChange(e) {
    const { name, value } = e.target;
    setPaciente(prev => ({
      ...prev,
      [name]: value
    }));
  }

  return (
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
              <li><Link to="/sobre">SOBRE</Link></li>
              <li><Link to="/editarperfil">EDITAR PERFIL</Link></li>
            </ul>
          </nav>
          <div className={styles.search}>
            <Input textoInput="" />
            <Botao Icone={Search} />
          </div>
        </header>

        <main className={styles.hero}>
          <section>
            <div className={styles.Perfil}>
              <img src="/imagens/Img_Usuario.png" alt="Usuário" />
              <p>{paciente.nomePaciente} {paciente.sobrenomePaciente}</p>
              <p>{paciente.cpfPaciente}</p>
            </div>

            <div className={styles.Historioco}>
              <h1>HISTÓRICO DE CONSULTAS</h1>
              <h3>Agendadas</h3>
              <Botao textoBotao="29/03 - Dr. Olavo" />
            </div>

            <div className={styles.Canceladas}>
              <Botao textoBotao="Ver Detalhes" />
            </div>
            <div className={styles.Concluidas}>
              <Botao textoBotao="Nenhuma" />
            </div>
          </section>

          <section className={styles.formulario}>
            <h1>EDITAR INFORMAÇÕES</h1>
            <div className={styles.dados_pessoais}>
              <h5 className={styles.categoria}>Dados Pessoais</h5>
              <div className={styles.email_input + ' ' + styles.input_completo}>
                <p>E-mail</p>
                <Input
                  tipoInput="text"
                  name="emailPaciente"
                  textoInput={paciente.emailPaciente}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.dois_input}>
                <div className={styles.nome_input}>
                  <p>Nome</p>
                  <Input
                    tipoInput="text"
                    name="nomePaciente"
                    textoInput={paciente.nomePaciente}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.sobrenome_input}>
                  <p>Sobrenome</p>
                  <Input
                    tipoInput="text"
                    name="sobrenomePaciente"
                    textoInput={paciente.sobrenomePaciente}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.dois_input}>
                <div className={styles.nascimento_input}>
                  <p>Data de Nascimento</p>
                  <input
                    type="date"
                    name="dataNascimento"
                    value={paciente.dataNascimento}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.genero_input}>
                  <p>Gênero</p>
                  <Input
                    tipoInput="text"
                    name="generoPaciente"
                    textoInput={paciente.generoPaciente}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.dois_input}>
                <div className={styles.cpf_input}>
                  <p>CPF</p>
                  <Input
                    tipoInput="text"
                    name="cpfPaciente"
                    textoInput={paciente.cpfPaciente}
                    onChange={handleChange}
                    disabled
                  />
                </div>

                <div className={styles.telefone_input}>
                  <p>Telefone</p>
                  <Input
                    tipoInput="text"
                    name="telefonePaciente"
                    textoInput={paciente.telefonePaciente}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.senha_input}>
                <p>Senha</p>
                <Input
                  tipoInput="password"
                  name="senhaPaciente"
                  textoInput={paciente.senhaPaciente}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.confirmar_senha}>
                <p>Confirmar Senha</p>
                <Input
                  tipoInput="password"
                  name="confirmarSenha"
                  textoInput={paciente.confirmarSenha}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.endereco}>
              <h5 className={styles.categoria}>Endereço</h5>

              <div className={styles.cep_rua}>
                <div className={styles.cep_input}>
                  <p>CEP</p>
                  <Input
                    tipoInput="text"
                    name="cep"
                    textoInput={paciente.cep}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.rua_input}>
                  <p>Rua</p>
                  <Input
                    tipoInput="text"
                    name="rua"
                    textoInput={paciente.rua}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.bairro_n}>
                <div className={styles.bairro_input}>
                  <p>Bairro</p>
                  <Input
                    tipoInput="text"
                    name="bairro"
                    textoInput={paciente.bairro}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.n_input}>
                  <p>N°</p>
                  <Input
                    tipoInput="text"
                    name="numero"
                    textoInput={paciente.numero}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.cidade_estado}>
                <div className={styles.cidade_input}>
                  <p>Cidade</p>
                  <Input
                    tipoInput="text"
                    name="cidade"
                    textoInput={paciente.cidade}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.estado_input}>
                  <p>Estado</p>
                  <Input
                    tipoInput="text"
                    name="estado"
                    textoInput={paciente.estado}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.complemento_input}>
                <p>Complemento</p>
                <Input
                  tipoInput="text"
                  name="complemento"
                  textoInput={paciente.complemento}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.botoes}>
              <div className={styles.Editar}>
                <Botao textoBotao="Salvar" />
              </div>
              <div className={styles.Voltar}>
                <Botao textoBotao="Cancelar" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Perfil;
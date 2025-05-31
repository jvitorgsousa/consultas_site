import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Botao from "../../componentes/Botao";
import Input from "../../componentes/Input";
import styles from './Login.module.css';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/login'/*Arrumar essa bomba*/, {
                emailPaciente: email,
                senhaPaciente: senha,
            });

            console.log('Login bem-sucedido:', response.data);
            
            alert('Login realizado com sucesso!');
        } catch (error) {
            console.error('Erro ao fazer login:', error.response?.data || error.message);
            alert(error.response?.data?.error || 'Erro ao fazer login.');
        }
    };

    return (
        <section className={styles.hero}>
            <div className={styles.imagemB}>
                <img src="/imagens/logo_branca.png" alt="Salus Care" />
                
                <Link to="/" className={styles.botaoVoltar}>
                    Voltar
                </Link>   
            
            </div>

            <main className={styles.formulario}>
                <div className={styles.dados_do_usuario}>
                    <h1 className={styles.categoria}>Login</h1>

                    <div className={styles.usuario_input}>
                        <p>Usuário</p>
                        <Input
                            tipoInput="text"
                            textoInput="Digite seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={styles.inputPersonalizado}
                        />
                    </div>

                    <div className={styles.senha_input}>
                        <p>Senha</p>
                        <Input
                            tipoInput="password"
                            textoInput="Digite sua senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            className={styles.inputPersonalizado}
                        />
                    </div>

                    <div className={styles.botao_entrar}>
                        <Botao
                            textoBotao="Entrar"
                            onClick={handleLogin}
                            className={styles.botaoPersonalizado}
                        />
                    </div>

                    <div className={styles.Lembrar_senha}>
                        <Input tipoInput="checkbox" />
                        Lembrar de mim <Link to="/Senha">Esqueceu a senha?</Link>
                    </div>

                    <br />

                    <div className={styles.IrCadastro}>
                        <p>Não tem uma conta? <Link to="/Cadastro">Cadastre-se</Link></p>
                    </div>

                    <div className={styles.redefinir_senha}>
                        <br />
                        <h3 className={styles.logar}>Logar com</h3>
                        <div className={styles.social_login}>
                            <img src="/assets/logo_face.png" alt="Facebook" />
                            <img src="/assets/logo_google.png" alt="Google" />
                            <img src="/assets/logo_apple.png" alt="Apple" />
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
}

export default Login;
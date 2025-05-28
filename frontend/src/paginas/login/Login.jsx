import { Link } from 'react-router-dom';
import Botao from "../../componentes/Botao";
import Input from "../../componentes/Input";
import styles from './Login.module.css';

function Login() {


    return (
        <section className={styles.hero}> 
            <div className={styles.imagemB}>
                <img src="/imagens/logo_branca.png" alt="Salus Care" />
            </div>
            <div>
                
            </div>
            <main className={styles.formulario}>
                <div className={styles.dados_do_usuario}>

                    <h1 className={styles.categoria}>Login</h1>

                    <div className={styles.usuario_input}>
                        <p>Usuário</p>
                        <Input tipoInput="text" textoInput="..." />
                    </div>

                    <div className={styles.senha_input}>
                        <p>Senha</p>
                        <Input tipoInput="password" textoInput="..." />
                    </div>
                    
                    <div className={styles.botao_entrar}>
                        <Botao textoBotao="Entrar" />
                    </div>

                    <div className={styles.Lembrar_senha}>
                            <Input tipoInput="checkbox" /> Lembrar de mim <Link to="/Senha">Esqueceu a senha?</Link>
                    </div>
                    <br/>
                    <div className = {styles.IrCadastro}>
                        <p>Não tem uma conta? <Link to="/Cadastro">Cadastre-se</Link></p>
                    </div>

                    <div className={styles.redefinir_senha}>
                        <br/>
                        <h3 className={styles.logar}>Logar com</h3>
                        <p>
                        <div className={styles.social_login}>
                            <img src="/assets/logo_face.png" alt="Facebook" />
                            <img src="/assets/logo_google.png" alt="Google" />
                            <img src="/assets/logo_apple.png" alt="Apple" />
                        </div>
                        </p>
                    </div>
                </div>
            </main>
        </section>
    );
}

export default Login;
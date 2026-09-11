import styles from "./Login.module.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.container}>
        <div className={styles.imgForm}>
          <img src="/imgtest.png" alt="Imagem do formulario" />
        </div>
        <div className={styles.form}>
          <h1>Login</h1>
          <form action="username" method="post">
            <div className={styles.inputs}>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="E-mail"
                required
              />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Senha"
                required
              />
              <button type="submit">
                <b>Entrar</b>
              </button>
            </div>
          </form>
          <h6 className={styles.textPequeno}>
            Não tem uma conta? <Link to="/register">Cadastre-se aqui</Link>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Register;



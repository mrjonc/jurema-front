import styles from "./Login.module.css";

function Login() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgForm}>
          <img src="/imgtest.png" alt="Imagem do formulario" />
        </div>
        <div className={styles.form}>
          <h1>Login do Estudante</h1>
          <form action="username" method="post">
            <label htmlFor="username">Email:</label>
            <input type="text" id="username" name="username" required />

            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" required />

            <button type="submit">Entrar</button>
          </form>
          <h2 className={styles.textPequeno}>
            Não tem uma conta? <a href="/cadastro">Cadastre-se aqui</a>
          </h2>
          
        </div>
      </div>
    </>
  );
}

export default Login;

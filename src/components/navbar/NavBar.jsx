import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
function NavBar() {
    return (
        <>
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src="" alt="Logo do projeto" />
            </div>

            <div className={styles.menu}>
                <Link to="/feed">FEED</Link>
                <Link to="/grupos">GRUPOS</Link>
                <Link to="/notas">NOTAS</Link>
            </div>

            <div className={styles.user}>
                <button>+ Novo Grupo</button>
                <div className={styles.userInfo}>
                    <img src="" alt="Img do usuario" />
                    <p>Nome do usuario</p>
                    <p>Curso do usuario</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default NavBar
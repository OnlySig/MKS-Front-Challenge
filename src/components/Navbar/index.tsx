import styles from './NavBar.module.scss'
import { TiShoppingCart } from "react-icons/ti";

const NavBar = () => {
    return (
      <div className={styles.nav__container}>
        <div className={styles.title}>
            <h1>MKS</h1>
            <p>Sistemas</p>
        </div>
        <div className={styles.icon__container}>
            <TiShoppingCart fontSize='20px'/>
            <span>0</span>
        </div>
      </div>
    )
}

export default NavBar
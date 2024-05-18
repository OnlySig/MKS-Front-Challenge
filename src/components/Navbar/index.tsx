import { useSelector } from 'react-redux';
import styles from './NavBar.module.scss'
import { TiShoppingCart } from "react-icons/ti";
import { IProdutos } from '../../interface/IProdutos';

interface INavBarProps {
  carrinho: IProdutos[]
}

const NavBar = () => {
  const carrinhoLength = useSelector((state : INavBarProps) => state.carrinho)
  console.log(carrinhoLength.length)
  return (
    <div className={styles.nav__container}>
      <div className={styles.title}>
          <h1>MKS</h1>
          <p>Sistemas</p>
      </div>
      <div className={styles.icon__container}>
          <TiShoppingCart fontSize='20px'/>
          <span>{carrinhoLength.length}</span>
      </div>
    </div>
  )
}

export default NavBar
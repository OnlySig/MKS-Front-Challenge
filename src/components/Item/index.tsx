import { IProdutos } from "../../interface/IProdutos"
import { RiShoppingBag3Line } from "react-icons/ri";

import styles from './Item.module.scss'

interface itemProps {
    produto: IProdutos
}

const Item = ({ produto } : itemProps) => {
    return (
        <div className={styles.container__item}>
            <img src={produto.photo} alt={produto.name} />
            <div className={styles.infos}>
                <h2>{produto.name}</h2>
                <span className={styles.amount}>R${parseFloat(produto.price)}</span>
            </div>
            <p>{produto.description}</p>
            <button><RiShoppingBag3Line/> COMPRAR</button>
        </div>
    )
}

export default Item
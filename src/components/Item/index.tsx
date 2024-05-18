import { IProdutos } from "../../interface/IProdutos"
import { RiShoppingBag3Line } from "react-icons/ri";

import styles from './Item.module.scss'
import { useDispatch } from "react-redux";
import { mudarCarrinho } from "../../store/reducers/carrinho";

interface itemProps {
    produto: IProdutos
    noCarrinho?: boolean
}

const Item = ({ produto, noCarrinho = false } : itemProps) => {
    const dispatch = useDispatch()
    const addCarrinho = () => {dispatch(mudarCarrinho(produto))}
    return (
        <div className={styles.container__item}>
            <img src={produto.photo} alt={produto.name} />
            <div className={styles.infos}>
                <h2>{produto.name}</h2>
                <span className={styles.amount}>R${parseFloat(produto.price??'')}</span>
            </div>
            <p>{produto.description}</p>
            <button onClick={addCarrinho}><RiShoppingBag3Line/> COMPRAR</button>
        </div>
    )
}

export default Item
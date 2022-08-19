import styles from './CartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../Context/cart-context'
import { useContext } from 'react'


const CartButton = props => {
    const ctx = useContext(CartContext);
    const totalItems = ctx.items.reduce((curTotal, curItem) => {
        return curTotal + parseInt(curItem.quantity);
    }, 0);
    return (
        <button className={styles.button} onClick={props.onClick}>
            <span className={styles.icon}><CartIcon /></span>
            <span>Cart</span>
            <span className={styles.badge}>{totalItems}</span>
        </button>
    )
}

export default CartButton;
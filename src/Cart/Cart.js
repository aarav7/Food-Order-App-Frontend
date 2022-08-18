import styles from './Cart.module.css'
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import { useContext } from 'react'
import CartContext from '../Context/cart-context'

const Cart = props => {
    const ctx = useContext(CartContext);

    let disableBtn = false;

    if (ctx.totalAmount !== 0) {
        disableBtn = true;
    }

    const cartItems = <ul className={styles["cart-items"]}>{ctx.items.map(item => {
        return <CartItem key={`cartItem_${item.id}`} item={item} onAdd={ctx.addItem} onRemove={ctx.removeItem} />;
    })}</ul >;

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{`$${ctx.totalAmount.toFixed(2)}`}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles["button--alt"]} onClick={props.onClose}>Close</button>
                {disableBtn && <button onClick={() => { console.log("button not disabled") }} disabled={!ctx.totalAmount} className={styles.button}>Order</button>}

            </div>
        </Modal>
    )
}

export default Cart
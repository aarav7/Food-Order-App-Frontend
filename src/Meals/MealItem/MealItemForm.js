import styles from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { useRef, useContext } from 'react'
import CartContext from '../../Context/cart-context'

const MealItemForm = props => {
    const ctx = useContext(CartContext);
    const inputRef = useRef();
    function addCartItem(item) {
        const inputVal = parseInt(inputRef.current.value);
        if (inputVal !== 0) {
            const newItem = { ...item, quantity: inputVal };
            ctx.addItem(newItem);
        }
    }

    return (
        < form className={styles.form} >
            <Input ref={inputRef} label="Amount" input={{
                id: "amount_" + props.id,
                type: "number",
                min: "1",
                max: "5",
                defaultValue: "0"
            }} />
            <button onClick={(e) => {
                e.preventDefault();
                addCartItem(props.meal);
            }}>+ Add</button>
        </form >
    );
}

export default MealItemForm
import classes from './CartItem.module.css';

const CartItem = ({ item, onAdd, onRemove }) => {
  const price = `$${item.price.toFixed(2)}`;

  function incrementQuantity(item) {
    const newQuantity = item.quantity + 1;
    const newItem = { ...item, quantity: newQuantity };
    onAdd(newItem);
  }

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {item.quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={() => { onRemove(item.id) }}>−</button>
        <button onClick={() => { incrementQuantity(item) }}>+</button>
      </div>
    </li>
  );
};

export default CartItem;

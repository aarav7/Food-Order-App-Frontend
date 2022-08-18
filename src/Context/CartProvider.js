import CartContext from './cart-context'
import { useReducer } from 'react'

const initialValu = {
    items: [],
    totalAmount: 0
}

function redu(stat, actio) {
    if (actio.type === "ADD_ITEM") {
        if (stat.items.length === 0) {
            console.log("ERROR");
            console.log(stat.items);
            stat.items.push(actio.item);
            return {
                items: stat.items,
                totalAmount: actio.item.price
            }
        }
        else {
            console.log(stat.items);
            const updateItemIndex = stat.items.findIndex((x) => x.id == actio.item.id);
            console.log(updateItemIndex);
            if (updateItemIndex !== -1) {
                if (stat.items[updateItemIndex].quantity !== actio.item.quantity) {
                    stat.items[updateItemIndex].quantity = actio.item.quantity;
                    const updatedAmount = stat.items.reduce((curAmt, curItem) => {
                        return curAmt + curItem.quantity * curItem.price;
                    }, 0);
                    return {
                        items: stat.items,
                        totalAmount: updatedAmount
                    }
                }
                else {
                    console.log("victory");
                    return stat;
                }
            }
            else {
                stat.items.push(actio.item);
                const updatedAmount = stat.items.reduce((curAmt, curItem) => {
                    return curAmt + curItem.quantity * curItem.price;
                }, 0);
                return {
                    items: stat.items,
                    totalAmount: updatedAmount
                }
            }
        }
    }
    if (actio.type === "REMOVE_ITEM") {
        const updateItemIndex = stat.items.findIndex((x) => x.id == actio.id);
        const newQuantity = stat.items[updateItemIndex].quantity - 1;

        if (newQuantity === 0) {
            const updatedItems = stat.items.filter((item) => item.id !== actio.id);
            const updatedAmount = updatedItems.reduce((curAmt, curItem) => {
                return curAmt + curItem.quantity * curItem.price;
            }, 0);
            return {
                items: updatedItems,
                totalAmount: updatedAmount
            }
        }

        stat.items[updateItemIndex].quantity = newQuantity;
        const updatedAmount = stat.items.reduce((curAmt, curItem) => {
            return curAmt + curItem.quantity * curItem.price;
        }, 0);
        return {
            items: stat.items,
            totalAmount: updatedAmount
        }
    }
}


const CartProvider = props => {
    const [state, dispatch] = useReducer(redu, initialValu)
    console.log(state.items);
    function removeItemHandler(id) {
        dispatch({ type: "REMOVE_ITEM", id: id });
    }

    function addItemHandler(item) {
        dispatch({ type: "ADD_ITEM", item: item });
    }

    const cartContext = {
        items: state.items,
        totalAmount: state.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    };




    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;
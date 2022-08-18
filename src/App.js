import React, { useState } from 'react';
import Header from './Layout/Header';
import Meals from './Meals/Meals';
import Cart from './Cart/Cart'
import CartProvider from './Context/CartProvider'


function App() {
  const [cartShown, setCartShown] = useState(false);
  // const [cartItems, setCartItems] = useState([]);
  // const cartValue = cartItems.length;

  function manageCartShown() {
    setCartShown(prevState => !prevState);
  }

  // function manageCartItems(item) {
  //   if (cartItems.length === 0) {
  //     const newCartItems = [...cartItems, item];
  //     console.log(newCartItems);
  //     setCartItems(newCartItems);
  //   }
  //   else {
  //     let itemFound = false;
  //     for (let i = 0; i < cartItems.length; i++) {
  //       if (cartItems[i].id === item.id) {
  //         itemFound = true;
  //         if (cartItems[i].cartValue !== item.cartValue) {
  //           cartItems[i].cartValue = item.cartValue;
  //           setCartItems([...cartItems]);
  //         }
  //       }
  //     }

  //     if (!itemFound) {
  //       const newCartItems = [...cartItems, item];
  //       setCartItems(newCartItems);
  //     }
  //   }
  // }
  // console.log(cartItems);

  return (
    <CartProvider>
      {cartShown && <Cart onClose={manageCartShown} />}
      <Header onClick={manageCartShown} />
      <Meals />
    </CartProvider>
  );
}

export default App;

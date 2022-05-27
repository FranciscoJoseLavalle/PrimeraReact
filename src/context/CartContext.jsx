import { createContext, useState } from 'react';

export const CartContext = createContext([])

function CartContextProvider({children}) {

    const [cartList, setCartList] = useState([]);

    function addToCart(item) {
        setCartList([
            ...cartList,
            item
        ])
    }
    
    function vaciarCarrito() {
        setCartList([])
    }

    console.log(cartList);

    return(
        <CartContext.Provider value={{cartList, addToCart, vaciarCarrito}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
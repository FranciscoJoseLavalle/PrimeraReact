import { createContext, useState } from 'react';

export const CartContext = createContext([])

function CartContextProvider({children}) {

    const [cartList, setCartList] = useState([]);
    const [cantidad, setCantidad] = useState()
    const [precio, setPrecio] = useState()

    function isInCart(id) {
        return cartList.some(el => el.id === id);
    }

    function addToCart(item) {
        if (isInCart(item.id)) {
            let i = cartList.findIndex(element => element.id === item.id);
            const newCartList = cartList;
            newCartList[i].cantidad += item.cantidad;
            setCartList(newCartList);
        } else {
            setCartList([
                ...cartList,
                item
            ])
        }
    }
    
    function disminuirCantidad(producto) {
        setCantidad(producto.cantidad--)
        if (producto.cantidad === 0) {
            const newCartList = cartList.filter(element => element.cantidad !== 0);
            setCartList(newCartList);
        }
    }
    
    function aumentarCantidad(producto) {
        setCantidad(producto.cantidad++)
    }

    function vaciarCarrito() {
        setCartList([])
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, vaciarCarrito, disminuirCantidad, aumentarCantidad}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
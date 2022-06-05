import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext([])

function CartContextProvider({children}) {

    const [cartList, setCartList] = useState([]);
    const [cantidad, setCantidad] = useState();
    const [precioTotal, setPrecioTotal] = useState(0);
    const [productosTotales, setProductosTotales] = useState(0);
    const [cartStatus, setCartStatus] = useState(true);

    function isInCart(id) {
        actualizarCarrito();
        return cartList.some(el => el.id === id);
    }

    function addToCart(item) {
        if (isInCart(item.id)) {
            let i = cartList.findIndex(element => element.id === item.id);
            const newCartList = cartList;
            newCartList[i].cantidad += item.cantidad;
            setCartList(newCartList);
            actualizarCarrito();
        } else {
            setCartList([
                ...cartList,
                item
            ])
            actualizarCarrito();
        }
    }
    
    function disminuirCantidad(producto) {
        setCantidad(producto.cantidad--)
        if (producto.cantidad === 0) {
            const newCartList = cartList.filter(element => element.cantidad !== 0);
            setCartList(newCartList);
        }
        actualizarCarrito();
    }
    
    function aumentarCantidad(producto) {
        if (producto.cantidad < producto.stock) {
            setCantidad(producto.cantidad++);
            actualizarCarrito();
        }
    }

    function actualizarCarrito() {
        setPrecioTotal(cartList.map(element => element.cantidad*element.precio).reduce((anterior, siguiente) => anterior + siguiente, 0));
        
        setProductosTotales(cartList.map(element => element.cantidad).reduce((anterior, siguiente) => anterior + siguiente, 0))
    }

    function borrar(producto) {
        let newCartList = cartList.filter(element => element.id !== producto.id)
        setCartList(newCartList)
        actualizarCarrito();
    }

    function vaciarCarrito() {
        setCartList([]);
        actualizarCarrito();
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, vaciarCarrito, disminuirCantidad, aumentarCantidad, precioTotal, setPrecioTotal, setProductosTotales, productosTotales, borrar, cartStatus, setCartStatus, actualizarCarrito}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
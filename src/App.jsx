import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import CartContextProvider from './context/CartContext';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Admin from './components/Admin/Admin';

import './App.css';

function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path='/PrimeraReact' element={<ItemListContainer />} />
          <Route path='/PrimeraReact/Categorias/:id' element={<ItemListContainer />} />
          <Route path='/PrimeraReact/Detalle/:detalleId' element={<ItemDetailContainer />} />
          <Route path='/PrimeraReact/Cart' element={<Cart />} />
          <Route path='/PrimeraReact/Admin' element={<Admin />} />

          <Route path='/*' element={<Navigate to='/PrimeraReact' replace />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;

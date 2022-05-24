import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import NavBar from './components/NavBar/NavBar';
import Contacto from './components/Contacto/Contacto';
import { CartContext } from './context/CartContext';

function App() {

  // console.log(CartContext)
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/PrimeraReact' element={<ItemListContainer />} />
          <Route path='/PrimeraReact/Categorias/:id' element={<ItemListContainer />} />
          <Route path='/PrimeraReact/Detalle/:detalleId' element={<ItemDetailContainer />} />
          <Route path='/PrimeraReact/Cart' element={<Cart />} />
          <Route path='/PrimeraReact/Contacto' element={<Contacto />} />

          <Route path='/*' element={<Navigate to='/PrimeraReact' replace />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

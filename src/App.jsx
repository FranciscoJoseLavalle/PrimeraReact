import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/PrimeraReact' element = { <ItemListContainer /> }/>
        <Route path='/PrimeraReact/Detalle/:detalleId' element = { <ItemDetailContainer /> }/>

        <Route path='/*' element = { <Navigate to='/PrimeraReact' replace /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

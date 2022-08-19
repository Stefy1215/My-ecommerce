import './App.css';
import React from 'react';
import Navbar from './Componentes/Navbar';
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import ItemListConteiner from  './Componentes/ItemListConteiner';
import Cart from './Componentes/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartContext';

function App() {
  return (
    <>aaa
    <BrowserRouter>
       <CartProvider>
        ccc
       {/* <Navbar />
         <Routes>
          <Route path= '/cart' element={<ItemListConteiner />} />
           <Route path= '/Categorias/:categoriaId' element={<ItemListConteiner />} />
           <Route path= '/sobre' element={<ItemListConteiner />} />
           <Route path= '/detalle/:detalleId' element={<ItemDetailContainer />} />
          </Routes> */}
       </CartProvider>
       bbb
    </BrowserRouter>
     
    </>
   
  );
}

export default App;

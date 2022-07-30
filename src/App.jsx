import './App.css';
import Navbar from './Navbar';
import ItemDetailConteiner from './ItemDetailConteiner';
import ItemListConteiner from  './ItemListConteiner';
import Cart from './Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
       <Navbar />
       <Routes>
         <route path= '/cart' element={<ItemListConteiner />} />
         <route path= '/Categorias:CategoriaId' element={<ItemListConteiner />} />
         <route path= '/sobre' element={<ItemListConteiner />} />
         <route path= '/detalle/detalleId' element={<ItemListConteiner />} />
        </Routes>
    </BrowserRouter>
     
    </>
   
  );
}

export default App;

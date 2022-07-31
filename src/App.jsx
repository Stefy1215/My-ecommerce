import './App.css';
import Navbar from './Componentes/Navbar';
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import ItemListConteiner from  './Componentes/ItemListConteiner';
import Cart from './Componentes/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
       <Navbar />
       <Routes>
         <Route path= '/cart' element={<ItemListConteiner />} />
         <Route path= '/Categorias/:CategoriaId' element={<ItemListConteiner />} />
         <Route path= '/sobre' element={<ItemListConteiner />} />
         <Route path= '/detalle/:detalleId' element={<ItemDetailContainer />} />
        </Routes>
    </BrowserRouter>
     
    </>
   
  );
}

export default App;

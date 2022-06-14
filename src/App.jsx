import { useState,useEffect} from 'react' 
import {BrowserRouter,Routes,Route,Navigate,} from "react-router-dom" 

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartWidget from './components/CartWidget/CartWidget';
import ItemCount  from "./components/ItemCount"
import Cart from './components/Cart/Cart';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ItemDetailContainer from './components/ItemDetalContainer/ItemDetailContainer';




function App() {
     
   return ( 
    <> 
      <BrowserRouter>
          <NavBar/>
          
          <Routes>
              <Route index path='/' element={ <ItemListContainer /> } />
              <Route path='/categoria/:categoriaId'element={<ItemListContainer/>}/>
              <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart/> }/>
              

              <Route path='*' element={<Navigate to="/" />} />

          </Routes>

              <ItemCount stock="5" initial="1"  >  </ItemCount>
             
     </BrowserRouter>
      
    </>
  )
}




export default App

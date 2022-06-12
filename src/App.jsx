import { useState,} from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartWidget from './components/CartWidget/CartWidget';
import ItemCount  from "./components/ItemCount"


function App() {
     
   
   
   return ( 
    <> 
      <NavBar></NavBar>
      <ItemListContainer mensaje = "Elija su producto" /> 
      <ItemCount stock="5" initial="1"  >  </ItemCount>
      

    </>
  )
}


//--------------------------------------------------


/*
const App = () =>{
       
     const [count, modificarCount] = useState (0)

     function agregar(){
       modificarCount(count + 1)
}
function restar(){
     modificarCount(count - 1)
}


     function carrito(e) {
       e.preventDefault();
       alert("se agregaron al carrito " + count + " productos");
     }

return(
    <div>
         <h2>La cantidad es = {count}</h2>
         <button onClick = {agregar} > + </button>
         <button onClick = {restar} > - </button>
         <br />
         <br />
         <form onSubmit={carrito}>
         <button type="submit">Agregar al carrito</button>
       </form>
         
         
    </div>

)
} */


//--------------     PROMESAS -----------------------------

/*
export default function App(){
      const [count, setCount] = useState (0)    
      const [date, setDate] = useState 

      const incrementar = () => {
            setCount(count + 1)
            setDate(date + date ())
      }
      return(
           <div>
              <h1> contador de Click </h1>
              <p>{date.toString()}</p>
              <button onClick={incrementar}>Click</button>
           </div>

      )

}*/

export default App

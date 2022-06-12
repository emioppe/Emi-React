import React from "react"
import { useState } from "react"
import '../App.css'

const ItemCount = ({stock, initial, onAdd}) =>{
  const [count, modificarCount] = useState (parseInt(initial))

  
  function agregar(){
    if (count < stock){
      modificarCount(count + 1) 
    }
    
    //modificarCount(count + 1)
    // modificarCount(a) == count = a
  }

  function restar(){
    if (count > initial){
      modificarCount(count - 1) 
    }
  }

  function carrito(e) {
    e.preventDefault();
    alert("se agregaron al carrito " + count + " productos");
  }

  return(
    <div>
      <div className="justify-content-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class=" bi bi-cart4" viewBox="0 0 16 16" >
      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
      </svg> {count} </div>
      <br/>
      <button onClick = {agregar} > + </button>
      <button onClick = {restar} > - </button>
      <br />
      <br />
      <form onSubmit={carrito}>
        <button type="submit">Agregar al carrito</button>
      </form>
    </div>
  )
}

export default ItemCount 


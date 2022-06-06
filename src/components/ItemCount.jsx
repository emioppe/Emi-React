import React from "react"

const ItemCount = () =>{
       
    const [count, modificarCount] = useState (0)

    function agregar(){
      modificarCount(count + 1)
}
function restar(){
    modificarCount(count - 1)
}

return(
   <div>
        <h2>La cantidad es = {count}</h2>
        <button onClick = {agregar} > + </button>
        <button onClick = {restar} > - </button>
        <br />
        <br />
        <button onClick  > Agregar al carrito </button>
        
   </div>

)
}

export default ItemCount 


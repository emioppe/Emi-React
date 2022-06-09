import React from "react"




const ItemListContainer = (props) => {
      return (

      <h3> {props.mensaje} </h3> 

      )
}

export default ItemListContainer 




//-------------- PROMESAS  ---------------

/*
const task = new promise((resolve, reject) => {
              
               let condition = true

               if (condition){
                     resolve ("200 ok")
               } else {
                     reject ("404 not found")
               }

} )

const ItemListContainer = () =>{
      task
      .then((resp) => {
             throw new Error ("Error")
                console.log(resp)
            } ) 
            .catch (err => console.log(err))
            .then (() => console.log("0ho1"))
            .finally(() => console.log("Hola"))

      return(
            <div>Item</div>
      )
}

export default ItemListContainer */




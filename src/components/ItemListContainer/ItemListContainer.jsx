import React from "react"


const ItemListContainer = (props) => {
      return (

      <h1> {props.mensaje} </h1> 

      )
}



export default ItemListContainer






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


      return(
            <div>Item</div>
      )
}*/






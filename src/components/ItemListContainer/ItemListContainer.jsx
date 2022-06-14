import React from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getFetch } from "../../Helpe/getFetch"
import Itemlist from "../components/Itemlist/Itemlist"




const ItemListContainer = () => {
      const [productos, setProductos] = useState([])
      const [loading, setLoading] = useState (true)
     
      const {categoriaId} = useParams ()
            console.log(categoriaId)

            

      useEffect(() => {
            if (categoriaId) {
                  getFetch() // llmada a la api
                   .then((resp) =>{
                         setProductos(resp.filter(producto => producto.categoria === categoriaId))
                         setLoading(false)
                   })
                        .catch (err => console.log(err))
            } else {
                  getFetch() // llmada a la api
                  .then((resp) =>{
                        setProductos(resp)
                        setLoading(false)
            
            })
            .catch (err => console.log(err))
        }  

} ,[categoriaId])

      return(
      
            <div> 
                  
                   
                         <h1> Cargando...</h1>

                         <div style={{display:"flex", flexDirection:"row", flex:"wrap"}}> 
                                <Item productos={productos} />
                        </div>

             </div>
       )
}


export default ItemListContainer 




/*
const ItemListContainer = (props) => {
      return (

      <h3> {props.mensaje} </h3> 

      )
}*/




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





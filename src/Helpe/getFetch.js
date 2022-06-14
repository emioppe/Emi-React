let productos = [

{ id: "1" , categoria: "remeras", name:"Emi", price:37, foto:"data: img/46.jpg "}
{ id: "2" , categoria: "remeras", name:"Emiliano", price:40, foto:"data: img/47.jpg "}

]

export const  getFetch = (id) => {
            //acciones
            return new promise(resolve, reject) => {
                 setTimeout (() =>{
                    if(id){
                        resolve(productos.find(prod => prod.id === id))
                    } else {
                        resolve(productos)
                    }
                 },2000 )   

            }
}

let producto = {id: "1" , categoria:"remeras", name:"Emi", price:37, foto:"data: img/46.jpg" } 

export const  getFetchOne () =>{

             return new Promise ((resolve, reject ) => {
                    setTimeout(() => {
                            resolve(producto)
                    }, 2000);
            })
}
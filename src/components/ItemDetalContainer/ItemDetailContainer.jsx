import { useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "../ItemDetail/ItemDetail";
import { getFetchOne } from "../../Helpe/getFetch";



const ItemDetailContainer = () => {
        const [producto,setProducto] = useState({})

        const {id} = useParams()

        console.log(id)

        useEffect(() =>{
                getFetchOne()
                .then((resp) => setProducto(resp))
                .catch(err => console.log(err))
        },[])
        
    return <ItemDetail producto={producto}/>

}

export default ItemDetailContainer
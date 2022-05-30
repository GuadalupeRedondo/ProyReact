import React, {useEffect, useState} from 'react'
import { getFetch } from '../components/helpers/getFetch'
import ItemDetail from '../itemDetail/ItemDetail'

export const ItemDetailContainer = () => {
    const[product, setProduct] = useState({})
    const {detalleId} = useParams()

    useEffect(() =>{
        getFetch(detalleId)
        .then(response => setProduct(response))
        .catch((err)=>console.log(err))
    },[])


  return (
    <div>
        <ItemDetail/>
    </div>
  )
}

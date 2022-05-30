import { useEffect, useState, useParams } from 'react';
import { getFetch } from '../helpers/getFetch';
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css';


const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const{id} = useParams()

  useEffect(() => {
  if(id){
    getFetch()
    .then(response => setProducts(response.filter((products) => products.category === id)))
    .catch((err) => console.log(err))
    .finally(() => setLoading(false));
  }else{
    getFetch()
    .then(response => setProducts(response))
    .catch((err) => console.log(err))
    .finally(() => setLoading(false));
  }
})

  return (
    <main> 
      <ItemList products={products}/>
    </main>
  )
}

export default ItemListContainer
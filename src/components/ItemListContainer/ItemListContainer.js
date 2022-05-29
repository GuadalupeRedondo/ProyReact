import {ItemList} from './ItemList'

import './ItemListContainer.css';

const products = [
{
  name: "Sweater negro",
  categoria: "sweater",
  id:1,
  img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.childrensalonoutlet.com%2Fes%2Fdolce-gabbana-teen-black-logo-sweater-344314.html&psig=AOvVaw3DIfDbLuMKi8_W0rs0njCc&ust=1653868389836000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLiR3JCyg_gCFQAAAAAdAAAAABAI",
  precio: 1000,
},
{
  name: "Blazer blanco",
  categoria: "sblazer",
  id:2,
  img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mujerhoy.com%2Fmoda%2Fno-te-pierdas%2Ftraje-chaqueta-blanco-zara-barato-blazer-original-espalda-abierta-arrasa-influencers-20210818130942-nt.html&psig=AOvVaw36JjxGIm28tt6YbVrKY_sy&ust=1653868432151000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCICZ6aSyg_gCFQAAAAAdAAAAABAH",
  precio: 2000,
},
]

const getProducts = new Promise((res, rej) =>{
  setTimeout(() => { 
    res(products)
  }, 3000 )
})

const ItemListContainer = () => {

const [products, setproducts] = useState([])
const {idCategoria} = useParams()

useEffect(() => {

getProducts
.then(p => {
    setproducts(p)
})
.catch((err) => console.log(err))
},[idCategoria])

  return (
    <main> 
      <ItemList products={products}/>
    </main>
  )
}

export default ItemListContainer

import Item from '../Item/Item'

const ItemList = ({products}) => {
console.log(products)
  return (
    <ul className='itemList'>
      {
        products.map(data =>{
          return <Item  key={data.id} product={data} />
        })
      }
    </ul>
  )
}

export default ItemList


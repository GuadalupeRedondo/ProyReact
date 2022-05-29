import {Item} from './Item'

const itemList = ({products}) => {
  return (
    <ul className='itemList'>
      {
        products.map(p =>{
          return < Item product={p} />
        })
      }
    </ul>
  )
}

export default itemList


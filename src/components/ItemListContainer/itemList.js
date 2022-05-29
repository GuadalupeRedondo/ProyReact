import {Item} from './Item'

const itemList = ({products}) => {
  return (
    <ul className='itemList'>
      {
        products.map(data =>{
          return < Item product={data} />
        })
      }
    </ul>
  )
}

export default itemList


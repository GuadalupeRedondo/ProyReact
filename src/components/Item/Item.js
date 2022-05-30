

const Item = ({product}) => {
  return (
    <div className='product'>

      <img src={product.img} />
      <div>
        <h3>{`${product.name} - ${product.category}`}</h3>
        <p>{product.price}</p>
      </div>
      
    </div>
  )
}

export default Item

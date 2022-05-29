const Item = ({product}) => {
    console.log(product)
  return (
    <li className='product'>
      <img src={product.img} />
      <div>
        <h3>{product.name}</h3>
        <p>{product.precio}</p>
      </div>
    </li>
  )
}

export default Item

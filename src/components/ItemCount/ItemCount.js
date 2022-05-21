import React, { useEffect, useState } from 'react'

import './ItemCount.css';

const ItemCount = ({stock, initial}) => {

    const [count, setCount] = useState(initial)

    function onAdd(){
    if(count < stock){
        setCount(count + 1)     
    }
    }
    function resta(){
    if(count > initial){
        setCount(count - 1)
    }    
    }
    useEffect( () => {
        console.log({count})
    }) 

return (

    <div>
        <button className="boton2" onClick={resta}>-</button>

        <button className="boton3">{count}</button>
        
        <button className="boton2" onClick={onAdd}>+</button>

        <button className="boton1" onClick={onAdd}>Agregar al carrito</button>
    </div>

)

}

export default ItemCount
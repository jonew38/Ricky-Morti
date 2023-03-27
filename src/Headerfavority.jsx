import React from 'react'
import { useContext } from 'react'
import Context from './Context'

const Headerfavority = ({product}) => {

  const {remove} = useContext(Context)
  
  const handleClick = product =>{
    remove(product)
  }
  console.log(product);
  return (
    <div>
        <ul>
            <img src={product.image} alt ={product.name}/>
            <h3>{product.name}</h3>
            <h3>{product.status}</h3>
            <h3>{product.species}</h3>
            <button onClick={()=>handleClick(product)}>Delete</button>
        </ul>
    </div>
  )
}

export default Headerfavority
import React from 'react'
import Context from './Context';
import { useContext } from 'react';
import './Header.css';




const Header = ({product}) => {

  const {add} = useContext(Context);

  const handleClick = item =>{
    add(item);
    
  }
    
  return (
    <div>
        <ul>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <h3>{product.status}</h3>
            <h3>{product.species}</h3>
            <button onClick={()=> handleClick(product)}>Favorite</button>

        </ul>
      </div>
  )
    
}

export default Header
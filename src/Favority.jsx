import { useContext, } from 'react'
import Context from './Context'
import Headerfavority from './Headerfavority'


const Favority = () => {

  const {state} = useContext(Context);

  
  console.log(state)
  return (
    <div>
        {state.cart.map(product =>( 
          <Headerfavority product = {product} key = {product.id}/>
        ))}
    </div>
  )
}

export default Favority
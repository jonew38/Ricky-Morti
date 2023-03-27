import React from 'react';
import Header from './Header';
import Star from './Star.png'
import Domi from './Domi';
import './Header.css'
import Favority from './Favority';
import { useState } from 'react';
import { useContext } from 'react';
import Context from './Context';
import './inicio.css';
import rickymorti from './P11928964_b_v8_ac.webp'




export default function Inicio ()  {
    const product = Domi()
    const [toggle, setToggle]= useState (true)
    const [person, setPerson] = useState (false)

    const {state: {cart}} = useContext(Context)

    const handleToggle = () =>{
      setToggle(toggle)
    
    }
    const handlePerson = () => {
      setPerson(!person)
    }
  return (
    <div className="App">
      <header className ="Header">
        <h1>Ricky & Morti</h1>
        <img className='Fondo' src={rickymorti} alt = 'ricky&morty'/>
        <div className ='Star'  onClick={handlePerson}>

          <img src={Star} alt ="Star"/>
            {cart.length > 0 ?<div>{cart.length}</div> : null}
            {person === true ? <p onClick={handleToggle}>Favority</p> :<p>Personage</p>}
            
        </div>
      </header>
      <section>
          <div className='produt'>
            {person && product.map (product => (<Header product={product} key={product.id}/>
            ))}

          </div>
          <div>
            {!person ?  toggle && <Favority/>: person}
          </div>
      </section>
    </div>
  )
}

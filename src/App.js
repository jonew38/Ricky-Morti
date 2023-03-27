import{BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Favority from './Favority';
import Inicio from './Inicio';
import Context from './Context';
import useInitialState from './useInitialState';
import Personage from './Personage';


function App () {
  const initialState = useInitialState()
  return (
    <Context.Provider value={initialState}>
      <BrowserRouter>
          <Routes>
            <Route path='/' element ={<Inicio/>}/>
            <Route path= 'favority' element ={<Favority/>}/>
            <Route path='personajes' element ={<Personage/>}/>
          </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;

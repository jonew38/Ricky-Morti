import  {useState, useEffect} from 'react';
import axios from 'axios';


const api = 'https://rickandmortyapi.com/api/character';


const Domi = () => {
    const  [articuli, setArticuli] = useState ([]);

    useEffect (() =>  {
        const fechData = async () =>{
            const data = await axios.get (api)
            setArticuli (data.data.results)
            
        }
        fechData()
    },[]);
    console.log(articuli)
    return articuli
        
};

export default Domi
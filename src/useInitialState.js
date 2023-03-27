import { useState } from "react";


const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState (initialState);

    const add = (payload)=>{
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    }

        const remove = (payload) =>{
            setState({
                ...state,
                cart: state.cart.filter(item => item.id !== payload.id),
        });
    };
    return {
        
        state,
        add,
        remove
    }
}
export default useInitialState
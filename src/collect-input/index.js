import { useReducer } from "react"
const reducer = (state, action) =>{
    const { type, payload } = action
    if(type === 'clear'){
        return {};
    }
    return{
        ...state,
        [type]: payload
    }
   
}
export const CollectInput = () =>{
    const [collection, dispatch] = useReducer(reducer, {})
    const handleInput = (payload, type) =>{
        dispatch({
            type,
            payload
        });
    };
    return {collection, handleInput}
}
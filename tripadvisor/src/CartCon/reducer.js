const reducer=(state,action)=>{
    switch(action.type){
        case "ADD_TO_BASKET":{
            return [...state,action.payload]
        }  
        case "REMOVE_FROM_BASKET":{
            const cartafterremoval=state.filter((item)=>item.location_id!=action.payload);
            return cartafterremoval
        }      
    default:{
        return state;
    }
}
}
export default reducer

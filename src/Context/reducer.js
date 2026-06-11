const reducer=(state,action)=>{
    switch(action.type){
        case "ADD_TO_HOTELS":{
            return [action.payload]
        }       
    default:{
        return state;
    }
}
}
export default reducer

export const addtobasket=(data)=>({
    type:"ADD_TO_BASKET",
    payload:data,
})

export const removefrombasket=(data)=>({
    type:"REMOVE_FROM_BASKET",
    payload:data,
})
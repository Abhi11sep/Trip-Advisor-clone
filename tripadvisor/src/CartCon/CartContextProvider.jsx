import React, { createContext, useReducer } from 'react'
import reducer from './reducer'


export const CartContext = createContext();

const init=[];

const CartContextProvider = ({ children }) => {
  const [state,dispatch]=useReducer(reducer,init)

  return (
    <div>
      <CartContext.Provider value={{ state,dispatch }}>
        {children}
      </CartContext.Provider>
    </div>
  )
}

export default CartContextProvider;
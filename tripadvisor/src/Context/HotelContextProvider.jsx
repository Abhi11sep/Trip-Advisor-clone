import React, { createContext, useReducer } from 'react'
import reducer from './reducer'


export const HotelContext = createContext();

const init=[];

const HotelContextProvider = ({ children }) => {
  const [state,dispatch]=useReducer(reducer,init)

  return (
    <div>
      <HotelContext.Provider value={{ state,dispatch }}>
        {children}
      </HotelContext.Provider>
    </div>
  )
}

export default HotelContextProvider;
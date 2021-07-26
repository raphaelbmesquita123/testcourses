import React, { createContext, useContext, useState } from 'react'

export const BasketContext = createContext({})

export function BasketProvider ({ children }) {
    const [ basket, setBasket ] = useState([])

    function addToBasket (item){
        setBasket([...basket, item])
    }

    return(
        <BasketContext.Provider
            value={{
                basket,
                addToBasket
            }}
        >
            { children }
        </BasketContext.Provider> 
    )
}

export const Basket = () => {
    return useContext(BasketContext)
}
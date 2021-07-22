import React, { createContext, useContext, useState } from 'react'

export const UserContext = createContext({})

export function UserProvider ({ children }) {

    const [ isUserLogged, setIsUserLogger] = useState(true)

    function UserLogOut (boolean) {
        setIsUserLogger(boolean)
    }

    return(
        <UserContext.Provider 
            value={{
                isUserLogged,
                UserLogOut
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export const User = () => {
    return useContext(UserContext)
}
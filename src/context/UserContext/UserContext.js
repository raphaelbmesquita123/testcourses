import React, { createContext, useContext, useState } from 'react'
// import { api } from '../../services/api/api';

export const UserContext = createContext({})

export function UserProvider ({ children }) {
    const [ user, setUser ] = useState(() => {
        const localStore = localStorage.getItem('@Web-courses-login:')
        if(localStore){
            return JSON.parse(localStore)
        }
        return null
    });


    function UserLogOut () {
        setUser(null)
        localStorage.removeItem('@Web-courses-login:')
    }

    function UserLogIn (data) {
        localStorage.setItem('@Web-courses-login:', JSON.stringify(data))
        setUser(data)
    }


    return(
        <UserContext.Provider 
            value={{
                user,
                UserLogOut,
                UserLogIn
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export const User = () => {
    return useContext(UserContext)
}
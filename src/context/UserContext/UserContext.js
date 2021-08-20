import React, { createContext, useContext, useState } from 'react'

export const UserContext = createContext({})

export function UserProvider ({ children }) {
    const [ user, setUser ] = useState(() => {
        const localStore = localStorage.getItem('@Web-courses-login:')
        if(localStore){
            return JSON.parse(localStore)
        }
        return null
    });
    const [ userCourses, setUserCourses ] = useState([])
    console.log(userCourses)

    function UserLogOut () {
        setUser(null)
        localStorage.removeItem('@Web-courses-login:')
    }

    function UserLogIn (data) {
        localStorage.setItem('@Web-courses-login:', JSON.stringify(data))
        setUser(data)
    }
    
    function handleUserCourses(courses) {
        setUserCourses(courses)
    }

    return(
        <UserContext.Provider 
            value={{
                user,
                userCourses,
                UserLogOut,
                handleUserCourses,
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
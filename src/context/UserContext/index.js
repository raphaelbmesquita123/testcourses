import React, { createContext, useContext, useState } from 'react'

export const UserContext = createContext({})

export function UserProvider({ children }) {
  const [user, setUser] = useState(() => {
    const localStore = localStorage.getItem('@Web-courses-login:')
    if (localStore) {
      return JSON.parse(localStore)
    }
    return null
  })
  const [userCourses, setUserCourses] = useState([])

  function userLogOut() {
    setUser(null)
    localStorage.removeItem('@Web-courses-login:')
  }

  function userLogIn(data) {
    localStorage.setItem('@Web-courses-login:', JSON.stringify(data))
    setUser(data)
  }

  function handleUserCourses(courses) {
    setUserCourses(courses)
  }

  return (
    <UserContext.Provider
      value={{
        user,
        userCourses,
        userLogOut,
        handleUserCourses,
        userLogIn,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const User = () => {
  return useContext(UserContext)
}

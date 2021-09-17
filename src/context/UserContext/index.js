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
  const [userPageOption, setUserPageOption] = useState(1)

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

  function handleUserPageOption(num) {
    setUserPageOption(num)
  }

  return (
    <UserContext.Provider
      value={{
        user,
        userCourses,
        userPageOption,
        userLogOut,
        handleUserCourses,
        userLogIn,
        handleUserPageOption,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const User = () => {
  return useContext(UserContext)
}

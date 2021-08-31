import React, { createContext, useContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'

//services
import { api } from '../../services/api'
import { handleSendErr } from '../../services/sendError'

//context
import { User } from '../UserContext'

export const BasketContext = createContext({})

export function BasketProvider({ children }) {
  const { user } = User()
  const [basket, setBasket] = useState(() => {
    const localStore = localStorage.getItem('@Web-courses-basket:')
    if (localStore) {
      return JSON.parse(localStore)
    }
    return []
  })
  const [courses, setCourses] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getCourses(){
      api.get('/courses', {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_STRAPI_JWT}`,
        },
      })
      .then((response) => {
        const { data } = response
        const dataToBasket = data.map((course) => {
          return {
            id: course.id,
            title: course.title,
            price: course.price,
            image: course.image[0].url,
            payed_clients: course.payed_clients,
          }
        })
        setCourses(dataToBasket)
        setIsLoading(false)
      })
      .catch((err) => console.log(err))
    }
    getCourses()
  }, [])

  async function addToBasket(id) {
    const { data } = await api.get(`courses/${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_STRAPI_JWT}`,
      },
    })

    try {
      const splitClients = data.payed_clients.split(' ')
      const hasClientBought =  splitClients.includes(user.user.email)
      if (hasClientBought){
        toast.info('You already bought this course')
      }
      const hasCourseOnBaket = basket.find((course) => course.id === data.id)
      if(hasCourseOnBaket){
        toast.info('You already have this course in your basket')

      }
      if (!hasCourseOnBaket) {
        const splitClients = data.payed_clients.split(' ')
        const isUserPayed = splitClients.includes(user.user.email)

        if (!isUserPayed) {
          setBasket([...basket, data])
          localStorage.setItem(
            '@Web-courses-basket:',
            JSON.stringify([...basket, data])
          )
        }
      }
    } catch (err) {
      handleSendErr(err)
    }
  }

  async function deletItem(id) {
    const { data } = await api.get(`courses/${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_STRAPI_JWT}`,
      },
    })
    const newBasket = basket.filter((course) => course.id !== data.id)
    setBasket(newBasket)
    localStorage.setItem('@Web-courses-basket:', JSON.stringify(newBasket))
  }

  function cleanBasket() {
    setBasket([])
    localStorage.removeItem('@Web-courses-basket:')
  }

  return (
    <BasketContext.Provider
      value={{
        basket,
        courses,
        isLoading,
        addToBasket,
        cleanBasket,
        deletItem,
      }}
    >
      {children}
    </BasketContext.Provider>
  )
}

export const Basket = () => {
  return useContext(BasketContext)
}

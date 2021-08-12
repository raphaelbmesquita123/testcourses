import React, { useState, useEffect } from 'react'
import { CourseCard } from '../../components/CourseCard/CourseCard'
import { Container, ItemBasket } from './styles'
import { useHistory } from 'react-router-dom'
import { User } from '../../context/UserContext/UserContext'
import { Basket } from '../../context/BasketContext/BasketContext'

import { FaTrashAlt } from "react-icons/fa";

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { api } from '../../services/api/api'

const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC);

export function UserPage() {
    const [ option, setOption ] = useState(1)
    const { user } = User()
    const { basket, deletItem } = Basket()
    const [ clientCourses, setClientCourses ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)
    const history = useHistory()

    if( user === null ){
        history.push('/')
    }

    function handleDeletItem (id) {
        deletItem(id)
    }

    useEffect( () => {
        try{
            api.get('/courses', 
            {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_STRAPI_JWT}`
                }
            }
            )
            .then(response => {
                const { data } = response
                const payedCourses = []
                for(let i = 0; i < data.length; i++){
                    const splitClients = data[i].payed_clients.split(' ')
                    const isUserPayed = splitClients.includes(user.user.email)
                    if(isUserPayed){
                        payedCourses.push(data[i])
                    }
                }
                setClientCourses(payedCourses)
                setIsLoading(false)
                
                
            })
            .catch(error => console.log(error))
        } catch(error){
            console.log(error)
        }
        
    }, [])

    return (
        <Container>
            <div className='helloContainer'>
                <p>Hello, {user?.user.firstName + ' ' + user?.user.lastName}!</p> 
            </div>
            <main>
                <div style={{ background: option === 1 ? 'var(--blue-100)': 'var(--blue-500)'}} onClick={() => setOption(1)}>YOUR COURSES</div>
                <div style={{ background: option === 2 ? 'var(--blue-100)': 'var(--blue-500)'}} onClick={() => setOption(2)}>CERTIFICATES</div>
                <div style={{ background: option === 3 ? 'var(--blue-100)': 'var(--blue-500)'}} onClick={() => setOption(3)}>PROFILE</div>
                {
                    basket.length > 0 
                    ?
                    <div style={{ background: option === 4 ? 'var(--blue-100)': 'var(--blue-500)'}} onClick={() => setOption(4)}>BASKET</div>
                    :
                    ''
                }
            </main>
            <section>
                {
                    option === 1 
                    ?
                        <div className="CoursesContainer">
                            {
                                isLoading ?
                                ''                                
                                :
                                clientCourses.map( course => {
                                    return <CourseCard key={course.id} image={process.env.REACT_APP_STRIPE_URL + course.image[0].url} id={course.id} payed={true}/>
                                })
                            }
                        </div>
                    : 
                    option === 2 
                    ?
                    'OPCAO 2'
                    :
                    option === 3 
                    ?
                    'OPCAO 3'
                    :
                    basket.length > 0 
                    ?
                    <div className="basket">
                        {
                            basket.map( course => {
                                return (
                                    <ItemBasket key={course.id}>
                                        <h3>{course.title}</h3>
                                        <small>{course.price}€</small>
                                        <FaTrashAlt 
                                            className="deletCourse"
                                            onClick={() => handleDeletItem(course.id)}    
                                        />
                                    </ItemBasket>
                                )
                            })
                        }
                        <Elements stripe={promise}>
                            <CheckoutForm />
                        </Elements>
                    </div>
                    :
                    ''
                }
            </section>
        </Container>
    )
}










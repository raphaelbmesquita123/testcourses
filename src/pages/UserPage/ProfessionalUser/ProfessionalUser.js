import React, { useState, useEffect } from 'react'
import { CourseCard } from '../../../components/CourseCard/CourseCard'
import { Container, ItemBasket, ProfileContainer } from './styles'
import { User } from '../../../context/UserContext/UserContext'
import { Basket } from '../../../context/BasketContext/BasketContext'

import { FaTrashAlt } from "react-icons/fa";

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { api } from '../../../services/api/api'

const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC);

export function ProfessionalUser() {
    const [ option, setOption ] = useState(1)
    const { user, handleUserCourses, userCourses } = User()
    const { basket, deletItem } = Basket()
    const [ isLoading, setIsLoading ] = useState(true)

    function handleDeletItem (id) {
        deletItem(id)
    }

    useEffect( () => {
        function getCourses ( ) {
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
                handleUserCourses(payedCourses)
                setIsLoading(false)
            })
            .catch(error => console.log(error))
        }
        getCourses()
    }, [user])

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
                                userCourses.map( course => {
                                    return <CourseCard 
                                        key={course.id} 
                                        image={process.env.REACT_APP_STRIPE_URL + course.image[0].url} 
                                        id={course.id} 
                                        payed={true}
                                        />
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
                    <ProfileContainer>
                        <h1>Profile</h1>
                            <form action="">
                                <input type="text" value={user.user.firstName} />
                                <input type="text" value={user.user.lastName} />
                                <input type="text" value={user.user.email} />
                                <input type="text" value={user.user.accountType} />
                                <input type="text" placeholder="City in Ireland"/>
                                <input type="text" value={user.user.firstName} />
                                <label htmlFor="file">UPLOAD YOUR CV <input type="file"/></label>
                                
                            </form>
                            
                    </ProfileContainer>
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










import axios from 'axios'

export const api = axios.create({
    baseURL: process.env.REACT_APP_STRIPE_URL
})
//https://web-courses-online.herokuapp.com
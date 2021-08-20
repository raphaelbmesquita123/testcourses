// import React, { useEffect, useState} from 'react'
// import { api } from '../../../services/api/api'
// import { Container } from './styles'
// import { FaFileDownload } from "react-icons/fa";

// export function CompanyUser() {
//     const [users, setUsers] = useState([])
    
//     useEffect( () => {
//         function getCourses ( ) {
//             api.get('/users', 
//             {
//                 headers: {
//                     Authorization: `Bearer ${process.env.REACT_APP_STRAPI_JWT}`
//                 }
//             }
//             )
//             .then(response => {
//                 const { data } = response
//                 console.log(data)
//                 setUsers(data)
//                 // setClientCourses(payedCourses)
//                 // setIsLoading(false)

//             })
//             .catch(error => console.log(error))
//         }
//         getCourses()
//     }, [])

    
//     return (
//         <Container>
//             <h1>Professionals </h1>
//             <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aliquid dolores nisi itaque, magnam fugit totam exercitationem fuga excepturi obcaecati ex at pariatur tempora molestias repellat cum, accusamus, autem explicabo.</small>
//             <div>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>City</th>
//                             <th>Part-time/Fulltime</th>
//                             <th>Courses Done</th>
//                             <th>CV</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td>Raphael</td>
//                             <td>Limerick</td>
//                             <td>Part-time</td>
//                             <td>Cleaning, Hygenic, security</td>
//                             <td><FaFileDownload/></td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </Container>
//     )
// }


import { api } from '../api/api'

export async function handleCourseAndUser (course, user){
    if( course.length === 1 ){
        try{
            const { data } = await api.get(`/courses/${course[0].id}`,
            {
                headers: {
                    Authorization:`Bearer ${process.env.REACT_APP_STRAPI_JWT}`
                }
            })

            const payed_clients_array = data.payed_clients.split(' ')
            payed_clients_array.push(user.identifier)
            const newClients = payed_clients_array.join(' ')

            await api.put(`/courses/${course[0].id}`, 
                {
                    payed_clients: newClients,
                },
                {
                    headers: {
                        Authorization:`Bearer ${process.env.REACT_APP_STRAPI_JWT}`
                    }
                },
            )

        } catch(err){
            console.log(err)
        }
    } 
    else{
            try{
                for(let i = 0; i < course.length; i++){
                    const { data } = await api.get(`/courses/${course[i].id}`,
                    {
                        headers: {
                            Authorization:`Bearer ${process.env.REACT_APP_STRAPI_JWT}`
                        }
                    })

                    const payed_clients_array = data.payed_clients.split(' ')
                    payed_clients_array.push(user.identifier)
                    const newClients = payed_clients_array.join(' ')
        
                    await api.put(`/courses/${course[i].id}`,
                            
                            {
                                payed_clients: newClients,
                            },
                            {
                                headers: {
                                    Authorization: `Bearer ${process.env.REACT_APP_STRAPI_JWT}`
                                }
                            },

                    )
                }
        

        } catch(err){
            console.log(err)
        }
    }


}
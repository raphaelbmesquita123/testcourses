import { toast } from 'react-toastify'

//services
import { api } from '../api'
import { handleSendErr } from '../sendError'

export async function handleAddClientToClientCertificate(course, clientEmail) {
  const clients_certificated_array = course.clients_certificate.split(' ')
  const isClientCertificated = clients_certificated_array.includes(clientEmail)
  if (!isClientCertificated) {
    clients_certificated_array.push(clientEmail)
    const newCertificatedClients = clients_certificated_array.join(' ')
    try {
      await api.put(
        `courses/${course.id}`,
        {
          clients_certificate: newCertificatedClients,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_STRAPI_JWT}`,
          },
        }
      )
      toast.info('Congratulation you got your certificate!!!')
    } catch (err) {
      handleSendErr(err)
    }
  } else {
    toast.error('You already have this certificate')
  }
}

import { toast } from 'react-toastify'

//services
import { api } from '../api'
import { handleSendErr } from '../sendError'

export async function handleAddClientToClientCertificate(course, clientEmail) {
  const clientsCertificatedArray = course.clients_certificate.split(' ')
  const isClientCertificated = clientsCertificatedArray.includes(clientEmail)
  if (!isClientCertificated) {
    clientsCertificatedArray.push(clientEmail)
    const newCertificatedClients = clientsCertificatedArray.join(' ')
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

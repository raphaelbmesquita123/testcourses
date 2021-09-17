import { toast } from 'react-toastify'

export function handleSendErr(err) {
  toast.error(
    'Sorry something went wrong, contact us throw the form on WhyTestCourse?'
  )
  throw err
}

import React from 'react'
import { toast } from 'react-toastify'
import emailjs from 'emailjs-com'
import { FaAngleDown } from 'react-icons/fa'

// components
import { FAQ } from '../../components/FAQ'

// styles
import { Container } from './styles'

//services
import { handleSendErr } from '../../services/sendError'

export function WhyPage() {
  function sendEmail(e) {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_xfskimn',
        'template_a3j93kc',
        e.target,
        'user_b3vLK4nmsJDCovCRtPpoB'
      )
      .then(
        (result) => {
          toast.success('You message was sent')
          console.log(result.text)
        },
        (err) => {
          handleSendErr(err)
        }
      )
  }

  return (
    <Container>
      <section>
        <div>
          <div></div>
        </div>
        <span>
          <h1>Stay up to date with our online courses</h1>
          <h3>
            Our mission is to train people who are looking to become a
            professional to facilitate their search in the job market
          </h3>
        </span>
        <a href='#FAQ'>
          <FaAngleDown />
        </a>
      </section>
      <div className='textWhy'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a
          voluptate consequuntur suscipit necessitatibus nihil, aliquid atque
          sequi rem, ad provident quod quasi labore et blanditiis corrupti
          corporis magni cupiditate. Incidunt quam quod accusamus ipsam facere
          dignissimos, ad ut, voluptas culpa ipsum, doloribus dicta eveniet
          assumenda. Ex iure fugiat totam esse voluptatibus, explicabo aperiam
          non mollitia rerum, amet ipsa doloribus?
        </p>
      </div>
      <div className='forProfessionals'>
        <h1>Professionals </h1>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            esse et ad nulla eligendi temporibus officia cupiditate corrupti,
            iure repudiandae nihil placeat eos nam eveniet debitis eum sint
            autem similique!
          </p>
          <img src='./certificate.png' alt='certifiicate' />
        </div>
      </div>
      <div className='FAQ' id='FAQ'>
        <h1>Faq</h1>
        <FAQ
          question='how long it takes to get my certificate?'
          answer='as soon as you finish your course, the certificate will be '
        />

        <FAQ
          question='how long it takes to get my certificate?'
          answer='as soon as you finish your course, the certificate will be available for download'
        />

        <FAQ
          question='how long it takes to get my certificate?'
          answer='as soon as you finish your course, the certificate will be available for download'
        />

        <FAQ
          question='how long it takes to get my certificate?'
          answer='as soon as you finish your course, the certificate will be available for download'
        />
      </div>
      <div className='contactUs' id='contactUs'>
        <h1>Drop us a message if you still have any question</h1>
        <form onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Name' required />

          <input type='text' name='email' placeholder='Email' required />

          <textarea
            name='message'
            className='formTextArea'
            placeholder='DROP US A MESSAGE'
            required
          />

          <button type='submit'>Send</button>
        </form>
      </div>
    </Container>
  )
}

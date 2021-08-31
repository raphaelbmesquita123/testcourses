import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

//styles
import { CheckOutForm } from './styles'

//services
import { handleAddCLientToPayedClients } from '../../../services/addClientToPayedClients';

//contexts
import { User } from '../../../context/UserContext'
import { Basket } from '../../../context/BasketContext'

export default function CheckoutForm() {
  const [succeeded, setSucceeded] = useState(false);
  // const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const { basket, cleanBasket } = Basket();
  const { user } = User()

  const itensToBasket = basket.map(item => {
    return {
      id: item.id,
      title: item.title,
      price: Number(item.price)
    }
  })

  const userToCheckout = {
    id: user.user.id,
    identifier: user.user.email,
    jwt: user.jwt
  }

  useEffect(() => {
    window.fetch(`${process.env.REACT_APP_NODE_URL}/create-payment-intent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          items: itensToBasket
        })
      })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setClientSecret(data.clientSecret);
      });
  }, [user]);

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };

  const handleChange = async (event) => {
    setDisabled(event.empty);
    // setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async ev => {
    ev.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    });

    if (payload.error) {
      toast.error(payload.error.message)
      // setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      toast.success('Your payment has been successfully')
      handleAddCLientToPayedClients(itensToBasket, userToCheckout)
      // setError(null);
      setProcessing(false);
      setSucceeded(true);
      cleanBasket()
      setTimeout(() => {
        window.location.reload();
      }, 1500)
    }
    
  };

  return (
    <CheckOutForm id="payment-form" onSubmit={handleSubmit}>
      <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
      <button
        disabled={processing || disabled || succeeded}
        id="submit"
      >
        <span id="button-text">
          {processing ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            "Pay now"
          )}
        </span>
      </button>
      
    </CheckOutForm>
  );
}

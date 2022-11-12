import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import React, {useState} from "react";
import ApiService from "../api";
import "./CheckoutForm.css"
const CheckoutForm = () => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const stripe = useStripe();
  const elements = useElements();
// Handle real-time validation errors from the CardElement.
const handleChange = (event) => {
  if (event.error) {
    setError(event.error.message);
  } else {
    setError(null);
  }
}
// Handle form submission.
const handleSubmit = async (event) => {
  event.preventDefault();
  const card = elements.getElement(CardElement);

  
  const {paymentMethod, error} = await stripe.createPaymentMethod({
    type: 'card',
    card: card
});
ApiService.saveStripeInfo({
    email, payment_method_id: paymentMethod.id})
.then(response => {
    console.log(response.data);
}).catch(error => {
    console.log(error)
})


};
return (
  <form onSubmit={handleSubmit} className="stripe-form">
     <div className="container">
     <div className="form-row">
      <label className="form-label" htmlFor="email">Email Address</label>
      <input className="form-input" id="email" name="name"    type="email" placeholder="jenny.rosen@example.com" required 
value={email} onChange={(event) => { setEmail(event.target.value)}} />
    </div>
    <div className="form-row">
      <label className="form-label" for="card-element">Credit or debit card</label> 
      <CardElement className="card-input" id="card-element" onChange={handleChange}/>
      <div className="card-errors" role="alert">{error}</div>
    
    
    </div>
    <button type="submit" className="submit-btn">
      Submit Payment
    </button>
         </div> 
   
  </form>
 );
};
export default CheckoutForm;
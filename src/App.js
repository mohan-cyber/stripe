import React from 'react';
import './App.css';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from "@stripe/stripe-js/pure";
import CheckoutForm from "./components/CheckoutForm";
const stripePromise = loadStripe('pk_test_51M3JKiSFBSttbagxvWepe64MxXSLlW2LyzfEqQ0nCPilOicyR7dlII9BCAKR2f5lYLKRBuqKUO1lSko7D1nxWLSA00GfbbmnVH');
const App = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);
export default App;

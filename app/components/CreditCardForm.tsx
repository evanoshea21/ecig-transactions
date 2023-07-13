"use client";
import React, { useState } from 'react';

export default function CardForm() {
  const [cardOwner, setCardOwner] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (name === 'cardOwner') {
      setCardOwner(value);
    } else if (name === 'cardNumber') {
      setCardNumber(value);
    }
    //console.log(cardOwner, cardNumber);
  };

  return (
    <form>
      <label>
        Card Owner: 
        <input
          name="cardOwner"
          type="text"
          value={cardOwner}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Card Number: 
        <input
          name="cardNumber"
          type="text"
          value={cardNumber}
          onChange={handleInputChange}
        />
      </label>
    </form>
  );
}
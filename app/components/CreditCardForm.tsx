"use client";
import React, { useState } from 'react';

export default function CardForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (name === 'firstName') {
      setFirstName(value);
    } else if (name === 'lastName') {
      setLastName(value);
    } else if (name === 'address') {
      setAddress(value);
    } else if (name === 'city') {
      setCity(value);
    } else if (name === 'state') {
      setState(value);
    } else if (name === 'zip') {
      setZip(value);
    } else if (name === 'country') {
      setCountry(value);
    } else if (name === 'phoneNumber') {
      setPhoneNumber(value);
    } else if (name === 'cardNumber') {
      setCardNumber(value);
    } else if (name === 'expirationDate') {
      setExpirationDate(value);
    }
  };

  return (
    <form>
      <label>
        First Name: 
        <input
          name="firstName"
          type="text"
          value={firstName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Last Name: 
        <input
          name="lastName"
          type="text"
          value={lastName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Address: 
        <input
          name="address"
          type="text"
          value={address}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        City: 
        <input
          name="city"
          type="text"
          value={city}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        State: 
        <input
          name="state"
          type="text"
          value={state}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Zip: 
        <input
          name="zip"
          type="text"
          value={zip}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Country: 
        <input
          name="country"
          type="text"
          value={country}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Phone Number: 
        <input
          name="phoneNumber"
          type="text"
          value={phoneNumber}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <br />
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
      <br />
      <label>
        Expiration Date: 
        <input
          name="expirationDate"
          type="text"
          value={expirationDate}
          onChange={handleInputChange}
        />
      </label>
    </form>
  );
}
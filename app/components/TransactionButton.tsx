"use client";
import axios from "axios";
import React from "react";

export default function TransactionButton() {
  function sendApiCall() {
    axios({ url: "http://localhost:1400/", method: "GET" }).then((res) => {
      console.log("response from server:\n ", res.data);
    });
  }
  return (
    <div>
      <button onClick={sendApiCall}>Send Transaction</button>
    </div>
  );
}

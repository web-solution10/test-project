import React,{ useEffect } from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

const myHeaders = new Headers();
myHeaders.append("apikey", "Y57TRtTf78cJCKb9SxDe7P3VUTT7IfCQ");

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};


function App() {
  useEffect(() => {
    fetch("https://api.apilayer.com/currency_data/convert?to={to}&from={from}&amount={amount}", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }, [])

  return (
    <>
      <h1>Currency</h1>
      <CurrencyRow />
      <div className="equals">=</div>
      <CurrencyRow />
    </>
  );
}

export default App;

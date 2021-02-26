import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [countries, setCountries] = useState([])
  console.log(countries)
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(d => {
        console.log(d[0])
        const data = d.slice(0, 20)
        setCountries(data)
      })
      .catch(error => console.log(error))
  }, [])
  return (
    <div>
      <h1>country length : {countries.length}</h1>
      <ul>
        {
          countries.map(cName => <li>{cName.name}</li>)
        }
      </ul>
    </div>
  );
}

export default App;

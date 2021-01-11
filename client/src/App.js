import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';


function App() {
  const [state, setstate] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/api/users1/')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setstate(data)
      }
      )
      .catch(e => console.log(e))

  }, [])

  return (
    <div className="App">

      {
        state.map((item) => (
          <div key={item.id}>{item.name}</div>

        ))
      }

    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/mrs full.png';

const styles = {
  sub: {
    fontSize: ".5em",
    height: 15
  },
  body: {
    fontSize: "1em",
    width: "75%",
    marginTop: "6%"
  }
};

const App = () => {
  const desc_arr = ['new media', 'commercial', 'music video', 'documentary', 'narrative'];
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (count === 4) setCount(0)
      else setCount(count + 1);
    }, 3000);
  }, [count]);

  return (
    <div className="main">
      <div className="header">
        <img className="image" alt="mrs" src={logo} />
        <p style={styles.sub}>{desc_arr[count]}</p>
        <p style={styles.body}>director / producer</p>
      </div>
    </div>
  );
};

export default App;

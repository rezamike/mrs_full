import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/mrs full.png';

const styles = {
  sub: {
    fontSize: ".8em",
    height: 15
  },
  body: {
    fontSize: "1em",
    width: "75%",
    marginTop: "4%"
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
        <a href="mailto:michael.sanaiha@gmail.com?subject=MRS Project Inquiry" className="button">CONTACT ME</a>
      </div>
      <div className="pageBottom">
        <a style={{ textDecoration: 'none', color: 'slategray' }} target="_blank" rel="noopener noreferrer" href="https://www.divmichaeldiv.com">web engineer</a>
      </div>
    </div>
  );
};

export default App;

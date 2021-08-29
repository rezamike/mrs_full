import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/mrs full.png';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


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

const desc_arr = ['new media', 'commercial', 'music video', 'documentary', 'narrative'];

const familySecret = () => {
  return (
    <div>
      <Router>
        <Link to="/family" style={{textDecoration: "none", color: "whitesmoke"}}>
          family secret
        </Link>
      </Router>
    </div>
  );
};

const Home = () => {
  const [index, setIndex] = useState(0);
  const [click, setClick] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      if (user == null && index === 4) setIndex(0);
      else if (user != null && index === 5) setIndex(0);
      else setIndex(index + 1);
    }, 3000);
  }, [user, index]);

  useEffect(() => {
    if (click >= 3) {
      setUser("user");
      desc_arr.push('family secret');
    }
  }, [user, click]);

  return (
    <div className="main">
      <div className="header">
        <img className="image" alt="mrs" src={logo} />
        <p style={styles.sub}>{desc_arr[index] === 'family secret' && user === 'user' && index === 5 ? familySecret() : desc_arr[index]}</p>
        <p style={styles.body}>director <a style={{textDecoration: "none", color: "whitesmoke"}} href="#0" onClick={(event) => {
          event.preventDefault();
          setClick(click + 1);
          }}>/</a> producer</p>
        <a href="mailto:michael.sanaiha@gmail.com?subject=MRS Project Inquiry" className="button">CONTACT ME</a>
      </div>
      <div className="pageBottom">
        <a style={{ textDecoration: 'none', color: 'slategray' }} target="_blank" rel="noopener noreferrer" href="https://www.divmichaeldiv.com">web engineer</a>
      </div>
    </div>
  );
};

export default Home;

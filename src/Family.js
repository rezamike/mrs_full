import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";

const styles = {
  headerText: {
    color: "whitesmoke",
    width: "50%",
    fontSize: "1.5em",
  },
  inputSection: {
    paddingTop: "10%",
  },
  input: {
    backgroundColor: "transparent",
    color: "whitesmoke",
    width: "50%",
    padding: "2%",
    textAlign: "center",
    fontSize: "1.2em",
    fontFamily: "inherit",
    margin: ".5% auto",
  },
};

const Opener = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  let handleClick = () => {
    if (name !== "") {
      localStorage.setItem("name", name);
    }
    if (email !== "") {
      localStorage.setItem("email", email);
    }
  };

  return (
    <div className="header">
      <p style={styles.headerText}>
        Welcome to the family page. Here we can vote about the upcoming
        Thanksgiving trip in an easier layout - hopefully with the goal of
        locking down something soon, since they move pretty quickly.
      </p>
      <div>
        <div style={styles.inputSection}>
          <p style={{ color: "slategray" }}>
            To interact with this portion of the site, please provide your name
            below:
          </p>
          <input
            type="text"
            placeholder="name"
            style={styles.input}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="text"
            placeholder="email"
            style={styles.input}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
      </div>
      <a
        href="#0"
        onClick={handleClick()}
        className="button"
        style={{ marginTop: "2%" }}
      >
        SUBMIT
      </a>
    </div>
  );
};

const Family = () => {
  useEffect(() => {
    let form_data = [];
    if (localStorage.getItem("name") != null && localStorage.getItem("email") != null) {
      let name = localStorage.getItem("name");
      let email = localStorage.getItem("email");

      form_data.push(name);
      form_data.push(email);

      axios.put("/api/user", form_data).then((res) => {console.log(res)}).catch((error) => {console.log(error)});
    }
  }, []);

  return (
    <div className="main">
      <Opener />
    </div>
  );
};

export default Family;

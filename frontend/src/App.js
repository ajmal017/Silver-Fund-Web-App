import React, { useState } from "react";
import axios from "axios";

import Header from "./components/layout/Header";
import Panes from "./components/layout/Panes";
import ErrorMsg from "./components/ErrorMsg";
import Signin from "./pages/Signin";
import Footer from "./components/layout/Footer";
import "./style.css";

export default function App() {
  function useLocalState(localItem) {
    const [loc, setState] = useState(localStorage.getItem(localItem));

    function setLoc(newItem) {
      localStorage.setItem(localItem, newItem);
      setState(newItem);
    }

    return [loc, setLoc];
  }
  const [token, setToken] = useLocalState(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [token, setToken] = useState(null);
  const [loginError, setLoginError] = useState(null);

  function signIn() {
    setLoginError(null);

    if (username === "") {
      setLoginError("No username was entered.");
      return;
    }

    if (password === "") {
      setLoginError("No password was entered.");
      return;
    }

    axios.defaults.baseURL = "http://localhost:8000/";
    axios
      .post("login/", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log("Token: ", response.data.token);
        setToken(response.data.token);
      })
      .catch((error) => {
        console.log(error);
        setLoginError(
          "Uh oh!  No user was found with those credentials.  (" + error + ")"
        );
      });

    setUsername("");
    setPassword("");
  }

  function signOut() {
    setToken(null);
    localStorage.clear();
  }

  function fillUsername(event) {
    setUsername(event.target.value);
  }

  function fillPassword(event) {
    setPassword(event.target.value);
  }

  return (
    <>
      <Header token={token} signOut={() => signOut()} />
      {token ? (
        <Panes />
      ) : (
        <>
          <ErrorMsg errorMsg={loginError} />
          <Signin
            username={username}
            password={password}
            fillUsername={fillUsername}
            fillPassword={fillPassword}
            submitPress={() => signIn()}
          />
        </>
      )}
      <Footer />
    </>
  );
}

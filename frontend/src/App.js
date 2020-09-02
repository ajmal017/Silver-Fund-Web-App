import "./style.css";

import React, { useState } from "react";
import axios from "axios";

import { apiBackendUrl } from "./constants";
import Header from "./layout/Header";
import Panes from "./layout/Panes";
import ErrorMsg from "./pages/components/ErrorMsg";
import Signin from "./pages/Signin/Signin";
import Footer from "./layout/Footer";

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

  const [username, setUsername] = useLocalState("");
  // const [username, setUsername] = useState("");
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

    axios.defaults.baseURL = apiBackendUrl;
    axios
      .post("api/login/", {
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
          "Oops!  Invalid credentials.  Try again.  If you can't remember your credentials or keep seeing this, contact support."
        );
        setUsername("");
        setPassword("");
      });
  }

  function signOut() {
    setToken(null);
    localStorage.clear();
    setUsername("");
    setPassword("");
    window.location.reload(true);
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
        <Panes username={username} password={password} />
      ) : (
        <>
          <ErrorMsg errorMsg={loginError} />
          <Signin
            username={username}
            password={password}
            fillUsername={fillUsername}
            fillPassword={fillPassword}
            signinPress={() => signIn()}
          />
        </>
      )}
      <Footer />
    </>
  );
}

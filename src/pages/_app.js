import React from "react";
import "./login.scss"
import App from "next/app";
import Login from "./login";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useState, useEffect } from "react"
import Home from "./Admin"

const MyApp = ({ Component, pageProps }) => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, [])

  return (isRendered && (
    <React.StrictMode>
      <Router>
        {/* <Login  /> */}
          <Routes>
            <Route path="/admin" element={<Home />} />
            <Route path="/" element={<Login {...pageProps}/>} />
        </Routes>
      </Router>
    </React.StrictMode>)
  );
}

export default MyApp;

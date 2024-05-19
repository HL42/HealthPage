import React from "react";
import "./Files.css";
import "./login.scss"
import App from "next/app";
import Login from "./login";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useState, useEffect } from "react"
import Home from "./Admin"
import Files from "./Files"

const MyApp = ({ Component, pageProps }) => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, [])

  return (isRendered && (
    <React.StrictMode>
      <Router>
          <Routes>
            <Route path="/admin" element={<Login {...pageProps} />} />
          <Route path="/" element={<Home {...pageProps}/>} />
          <Route path="/files" element={<Files {...pageProps} />} />
        </Routes>
      </Router>
    </React.StrictMode>)
  );
}

export default MyApp;

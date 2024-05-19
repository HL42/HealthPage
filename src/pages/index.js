import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./_app";

const IndexPage = () => {
  useEffect(() => {
    // This code will only run on the client-side
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

    return () => {
    };
  }, []);

  return null;
};

export default IndexPage;
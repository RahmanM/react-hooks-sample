import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

export const UserContext = React.createContext("user");
const user = {
  name: "Rahman Mahmoodi",
  email: "rm@gmail.com"
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <UserContext.Provider value={user}>
      <App />
    </UserContext.Provider>
  </React.StrictMode>,
  rootElement
);

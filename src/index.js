import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Episode from "./pages/Episode";
import Navbar from "./components/Navbar";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={App}></Route>
        <Route path="/:id" exact component={App}></Route>
        <Route
          path="/:id/episode/:idCharacter"
          exact
          component={Episode}
        ></Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

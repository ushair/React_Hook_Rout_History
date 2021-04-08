import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import Contact from "./Components/Contact.jsx";
import Services from "./Components/Services";

function App() {
  return (
    <div className="App">
      <Link to="/">About </Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/Services">Services</Link>
      <Switch>
        <Route
          exact
          path="/"
          component={() => {
            return <Services name="About" />;
          }}
        />
        <Route
          path="/services"
          component={() => {
            return <Services name="Services" />;
          }}
        />
        <Route path="/contact/:name/:lname" component={Contact} />
        <Route path="/contact/" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;

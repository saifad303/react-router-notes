import Home from "./Home";
import Contact from "./Contact";
import AboutUs from "./AboutUs";

import { Switch, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            activeStyle={{ fontWeight: "bold", color: "red" }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            activeStyle={{ fontWeight: "bold", color: "red" }}
            to="/about/123"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            activeStyle={{ fontWeight: "bold", color: "red" }}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about/:slug" component={AboutUs} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;

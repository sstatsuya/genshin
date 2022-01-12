import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import routes from "./util/routes";
import Undeveloped from "./Error/Undeveloped";

function App() {
  return (
    <Router>
      <div id="App">
        <Header />
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            );
          })}
          <Redirect to="/undeveloped" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

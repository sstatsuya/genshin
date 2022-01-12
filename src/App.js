import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./util/routes";

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
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

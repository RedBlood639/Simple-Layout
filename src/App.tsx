import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
// import stylesheets
import "./assets/scss/app.scss";
//import loading component
import Loading from "./components/Loading";
const Pages = React.lazy(() => import("./pages"));

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Redirect exact from="/" to="/setup" />
            <Route path="/setup" component={Pages} />
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;

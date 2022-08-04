import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import { Loader } from "./components/Loader";

const Home = lazy(() => import("./pages/home"));
const RaidHelper = lazy(() => import("./pages/raidhelper"));
const Arenapointcalculator = lazy(() => import("./pages/arenapointcalculator"));
const gemfinder = lazy(() => import("./pages/gemfinder"));
const Terms = lazy(() => import("./pages/terms"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

const App = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/raidhelper" component={RaidHelper} />
          <Route
            path="/arenapointcalculator"
            component={Arenapointcalculator}
          />
          <Route path="/gemfinder" component={gemfinder} />
          <Route path="/terms" component={Terms} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  );
};

export default App;

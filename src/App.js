import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import { Loader } from "./components/Loader";

const Home = lazy(() => import("./pages/home/home"));
const RaidHelper = lazy(() => import("./pages/raidhelper/raidhelper"));
const Arenapointcalculator = lazy(() =>
  import("./pages/arenapointcalculator/ArenaPointCalculator")
);
const HitCapHelper = lazy(() => import("./pages/hitcaphelper/hitcaphelper"));
const Gemfinder = lazy(() => import("./pages/gemfinder/gemfinder"));
const Terms = lazy(() => import("./pages/terms"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Credits = lazy(() => import("./pages/credits"));

const App = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/raidhelper" component={RaidHelper} />
          <Route
            path="/arenapointcalculator"
            component={Arenapointcalculator}
          />
          <Route path="/gemfinder" component={Gemfinder} />
          <Route path="/hitcaphelper" component={HitCapHelper} />
          <Route path="/terms" component={Terms} />
          <Route path="/credits" component={Credits} />
          <Route path="/" component={Home} />
          <Route path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  );
};

export default App;

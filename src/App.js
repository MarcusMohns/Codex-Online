import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import RaidAssembler from "./pages/raidassembler";
import Arenapointcalculator from "./pages/arenapointcalculator";
import gemfinder from "./pages/gemfinder";
import Terms from "./pages/terms";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/raidassembler" component={RaidAssembler} />
        <Route path="/arenapointcalculator" component={Arenapointcalculator} />
        <Route path="/gemfinder" component={gemfinder} />
        <Route path="/terms" component={Terms} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;

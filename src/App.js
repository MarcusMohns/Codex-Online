import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import About from "./pages/about";
import RaidAssembler from "./pages/raidassembler";
import Arenapointcalculator from "./pages/arenapointcalculator";
import gemfinder from "./pages/gemfinder";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/raidassembler" component={RaidAssembler} />
        <Route path="/arenapointcalculator" component={Arenapointcalculator} />
        <Route path="/gemfinder" component={gemfinder} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;

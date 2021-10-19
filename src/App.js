import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/';
import About from './pages/about';
import RaidAssembler from './pages/raidassembler';
import Arenapointcalculator from './pages/arenapointcalculator';



const App = () => { 

  return (
    <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />      
          <Route path="/raidassembler" component={RaidAssembler} />        
          <Route path="/arenapointcalculator" component={Arenapointcalculator} />      
        </Switch>  
    </Router>

    
  );
}

export default App;
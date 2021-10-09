import {useState} from 'react'
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import Home from './pages/';
import About from './pages/about';
import RaidAssembler from './pages/raidassembler';
import Arenapointcalculator from './pages/arenapointcalculator';

import { Container } from './components/styles/Container.styled';
import SpecButtons from './components/SpecButtons'


const App = () => { 
  const [specs,setSpecs] = useState([
    {
      id:1123,
      text:"Affliction Warlock",
      image:require('./images/warlock_affliction.png').default,
      color:'purple',
    },
    {    
      id:2123,
      text:"Destruction Warlock",
      image:require('./images/warlock_destruction.png').default,
      color:'purple',
    },
  ]
)

  return (
    <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />      
          <Route path="/raidassembler" component={RaidAssembler} />        
          <Route path="/arenapointcalculator" component={Arenapointcalculator} />      
        
        </Switch>  
        <Container>
          <SpecButtons specs={specs}></SpecButtons>
        </Container>
    </Router>

    
  );
}

export default App;

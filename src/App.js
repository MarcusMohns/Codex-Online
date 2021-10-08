import {useState} from 'react'
import Header from "./components/Header";
import SpecButtons from "./components/SpecButtons";

const App = () => { 
  const [specs,setSpecs] = useState([
    {
      id:1123,
      text:"Affliction Warlock",
      image:require('./images/warlock_affliction.png').default
    },
    {    
      id:2123,
      text:"Destruction Warlock",
      image:require('./images/warlock_destruction.png').default
    },
  ]
)


  
  return (
    <div className="container">
      <SpecButtons specs={specs} />
    </div>
  );
}

export default App;

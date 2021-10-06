
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/Contact';
import About from './component/About';
import Nav from './component/Nav';
import Test from './component/Test';

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route path='/'exact component={Home} />
          <Route path='/about'  component={About} />
          <Route path='/contact'  component={Contact} />
          <Route path='/posts/:id'  component={Test} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React from 'react';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';

function App() {
  return (
        <Router>
            <Switch>
                <Route exact path='/' component={About}/>
                <Route path='/about' component={About}/>
                <Route path='/projects' component={Projects}/>
                <Route path='/resume' component={Resume}/>
            </Switch>
        </Router>
  );
}

export default App;

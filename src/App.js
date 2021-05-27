import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Forms from './components/Forms';
import Success from "./page/Success";


function App() {
  return (
    <Router>
    <div className="App"> 
    
    <Switch>
        <Route  path="/" exact component={Forms} />
        <Route  path="/success"  component={Success} /> 
      </Switch>
    
    </div>

    </Router> 
  );
}

export default App;

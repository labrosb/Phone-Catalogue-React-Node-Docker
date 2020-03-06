import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import PhonesList from './components/Phones/PhonesScreen';

function App() {
  // There's no need for an actual router. I include it thinking of the page
  // as a part of a bigger system rather than an independent app
  return (
    <Router>
      <Switch>
       <Route exact path="/">
        <PhonesList />
      </Route>
     </Switch>
   </Router>
  );
}

export default App;

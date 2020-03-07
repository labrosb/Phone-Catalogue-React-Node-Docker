import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import PhonesList from './components/Phones/PhonesScreen';

function App() {
  // There's no need for an actual router. I include it thinking of the page
  // as a part of a potentially extendable system rather than an independent app
  return (
    <Provider store={store}>
      <Router>
        <Switch>
         <Route exact path="/">
          <PhonesList />
        </Route>
       </Switch>
     </Router>
    </Provider>
  );
}

export default App;

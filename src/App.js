import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './components/user/user-style.scss';
import Userindex from './components/user/Userindex'


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Switch>
          <Route path="/user">
            <Userindex />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

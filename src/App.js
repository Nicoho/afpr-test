import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Questionnaire from './components/user/Questionnnaire';
import Fin from './components/user/Fin'
import Debut from './components/user/Debut';


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Switch>
          <Route path="/test">
            <Questionnaire />
          </Route>
          <Route exact path='/'>
            <Debut />
          </Route>
          <Route path="/end">
            <Fin />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

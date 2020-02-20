import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Questionnaire from './components/Questionnnaire';
import Fin from './components/Fin'
import Debut from './components/Debut';


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

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Questionnaire from './Questionnnaire';
import Fin from './Fin'
import Debut from './Debut';



const User = () => {


  return (
    <>
      <BrowserRouter>
        <div className="App">

          <Switch>
            <Route path="/user/test">
              <Questionnaire />
            </Route>
            <Route exact path='/user'>
              <Debut />
            </Route>
            <Route path="/user/end">
              <Fin />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  )
}

export default User;
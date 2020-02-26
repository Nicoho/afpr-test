import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './app-style.scss';
import Userindex from './components/user/Userindex';
import LogoAmiltone from './img/LogoAmiltone.svg'


function App() {
  return (
    <div className="App ">
      <div className='logoAmiltone'>
        <img src={LogoAmiltone} alt='logoAmiltone' />
      </div>
      <BrowserRouter>

        <Switch>
          <Route path="/user/:userId/test/:testId">
            <Userindex />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

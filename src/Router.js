import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Leaderbord from './Leaderboard';
import QR from './QR';
import RB from './RB';
import Quizz from './quizz';
import QuizzCustomers from './quizzCustomers';
import QuizzNoCustomers from './quizzNoCustomers';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Leaderbord} />
        <Route path="/QR/:activity" component={QR} />
        <Route path="/RB/" component={RB} />
        <Route path="/quizz" component={Quizz} />
        <Route path="/quizzCustomers" component={QuizzCustomers} />
        <Route path="/quizzNoCustomers" component={QuizzNoCustomers} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
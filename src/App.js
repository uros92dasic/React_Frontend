import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import NewPlace from './places/pages/NewPlace';
import Users from './user/pages/Users';
import Page404 from './Page404';
import MainNavigation from './shared/components/Navigation/MainNavigation';

function App() {
  return (
    <Router>
      <MainNavigation />
        <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/places/new" exact>
            <NewPlace />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
          <Redirect to="/" />
        </Switch>
        </main>
    </Router>
  );
}

export default App;

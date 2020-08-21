import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routes } from './routes';
import MainTemplate from './templates/MainTemplate';

function Root() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home} component={MainTemplate} />
        <Route path={routes.favorites} component={MainTemplate} />
      </Switch>
    </BrowserRouter>
  );
}

export default Root;

import React from 'react';
import { Provider } from './context';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routes } from './routes';
import MainTemplate from './templates/MainTemplate';
import Home from './views/Home';

function Root() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.favorites} component={MainTemplate} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default Root;

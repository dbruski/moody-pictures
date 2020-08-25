import React from 'react';
import { Provider } from './context';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routes } from './routes';
import Home from './views/Home';
import Favorites from './views/Favorites';

function Root() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.favorites} component={Favorites} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default Root;

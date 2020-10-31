import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';

import { configureStore } from '../redux';
import './app.css';

// TODO: pick whether you would like to work with a class-based or hooks-based component and uncomment the file
// import { OverviewPage } from './overview-page-hooks';
import { OverviewPage } from './overview-page-class';

const store = configureStore();

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Link to="/overview">Overview</Link>
        </div>
        <Switch>
          <Route path="/overview" component={OverviewPage} />
          <Redirect from="/*" to="/overview" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

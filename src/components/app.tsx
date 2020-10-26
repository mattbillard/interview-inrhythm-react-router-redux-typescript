import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';

import { SamplePage1, SamplePage2 } from '../components';
import { configureStore } from '../redux';

const store = configureStore();

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Link to="/sample-page1">Sample Page 1</Link> &nbsp;|&nbsp; 
          <Link to="/sample-page2">Sample Page 2</Link>
        </div>
        <Switch>
          <Route path="/sample-page1" component={SamplePage1} />
          <Route path="/sample-page2" component={SamplePage2} />
          <Redirect from="/*" to="/sample-page1" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

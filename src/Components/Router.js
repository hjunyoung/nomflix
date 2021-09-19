import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Header from './Header';
import Home from 'Routes/Home';
import TV from 'Routes/TV';
import Search from 'Routes/Search';
import Detail from 'Routes/Detail';

const RouterComponent = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/tv" component={TV} exact />
        <Route path="/search" component={Search} exact />
        <Route path="/movie/:id" component={Detail} exact />
        <Route path="/tv/:id" component={Detail} exact />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default RouterComponent;

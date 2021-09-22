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
import Collection from 'Routes/Collection';

const RouterComponent = () => {
  return (
    <Router basename="https://peaceful-jennings-abd301.netlify.app/">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/tv" component={TV} exact />
        <Route path="/search" component={Search} exact />
        <Route path="/movie/:id" component={Detail} exact />
        <Route path="/tv/:id" component={Detail} exact />
        <Route path="/collection/:id" component={Collection} exact />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default RouterComponent;

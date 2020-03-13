import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home/';
import News from './components/News/';
import Profile from './components/Profile/';
import Auth from './components/Auth/';
import NavigationItems from './components/Navigation/';

import './App.css';

const routes = (
  <Switch>
    <Route
      path="/login"
      render={props => {
        if (localStorage.getItem('isAuth')) {
          localStorage.removeItem('isAuth');
        }

        return <Auth {...props} />;
      }}
    />
    <Route path="/news" component={News} />
    <Route
      path="/profile"
      render={props =>
        localStorage.getItem('isAuth') === 'true' ? (
          <Profile {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
    <Route path="/" exact component={Home} />
    <Redirect to="/" />
  </Switch>
);

function App() {
  return (
    <div>
      <NavigationItems></NavigationItems>
      <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
    </div>
  );
}

export default App;

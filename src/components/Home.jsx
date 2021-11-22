import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Search from './search/Search';
import Album from './Album';
import Favorites from './Favorites';
import Profile from './Profile';
import ProfileEdit from './ProfileEdit';
import NotFound from './NotFound';

class Home extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/album/:id" component={ Album } />
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/profile/edit">
          <ProfileEdit />
        </Route>

        <Route exact path="*" component={ NotFound } />
      </Switch>
    );
  }
}

export default Home;

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Search from './components/Search';
import Album from './components/Album';
import Favorites from './components/Favorites';
import Profile from './components/Profile';
import ProfileEdit from './components/ProfileEdit';
import NotFound from './components/NotFound';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/search">
            <Header />
            <Search />
          </Route>
          <Route exact path="/album/:id">
            <Album />
            <Header />
          </Route>
          <Route exact path="/favorites">
            <Favorites />
            <Header />
          </Route>
          <Route exact path="/profile">
            <Profile />
            <Header />
          </Route>
          <Route exact path="/profile/edit">
            <ProfileEdit />
            <Header />
          </Route>

          <Route exact path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

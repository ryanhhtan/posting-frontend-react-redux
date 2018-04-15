import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from '../navbar/Navbar';

import Home from '../pages/Home';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Post from '../pages/Post';
import Login from '../pages/Login';
//import Logout from '../pages/Logout';
import Register from '../pages/Register';
import Profile from '../pages/Profile';
import NotFound from '../pages/NotFound';

class AppRouter extends Component {
  render(){
    return(
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/posts" component={ Posts } />
            <Route path="/about" component={ About } />
            <Route path="/login" component={ Login } />
            <Route path="/register" component={ Register } />
            <Route path="/profile" component={ Profile } />
            <Route path="/post/:id" component={ Post } />
            <Route component={ NotFound } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AppRouter;

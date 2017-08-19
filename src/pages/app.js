// application's entry

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import reducers from 'reducers/index';
import '../css/common.less';

// pages
import Home from './components/Home';
import Aside from './common/Aside';

class Application extends Component {
  render() {
    return (
      <div className="appContainer">
        <div className="header">
          <Link to="Home">Home</Link>
        </div>
        <div className="container">
          <Aside />
          {this.props.children}
        </div>
      </div>
    );
  }
}

const store = createStore(reducers, {}, applyMiddleware(thunk));

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Application}>
        <IndexRoute component={Home}/>
        <Route path="Home" component={Home}></Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { render } from 'react-dom'
import App from './modules/App'


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
  ), document.getElementById('app'))
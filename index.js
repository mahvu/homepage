import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { render } from 'react-dom'
import App from './modules/App'
import CV from './modules/cv'
import Projects from './modules/projects'
import Project from './modules/project'
import Home from './modules/home'

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
        <IndexRoute component={Home}/>
            <Route path="/projects" component={Projects}>
                <Route path="/projects/:projectName" component={Project}/>
            </Route>
            <Route path="/cv" component={CV}/>
        </Route>
    </Router>
  ), document.getElementById('app'))

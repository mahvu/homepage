import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { render } from 'react-dom'
import App from './modules/App'
import cv from './modules/cv'
import projects from './modules/projects'
import project from './modules/project'
import home from './modules/home'

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
        <IndexRoute component={home}/>
            <Route path="/projects" component={projects}>
                <Route path="/projects/:projectName" component={project}/>
            </Route>
            <Route path="/cv" component={cv}/>
        </Route>
    </Router>
  ), document.getElementById('app'))

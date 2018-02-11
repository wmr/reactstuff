import React, { Component } from 'react'
import { ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'
import FontIcon from 'material-ui/FontIcon'
import FlatButton from 'material-ui/FlatButton'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Main from './Main'
import Stuff from './Stuff'

export default class MainNav extends Component {
  render() {
    return (
      <div><Router>
        <div>
          <ToolbarGroup firstChild={true}>
            <Link to="/">
              <FlatButton linkButton={true} label="Main"/></Link>
              <Link to="/stuff/12">
                <FlatButton linkButton={true} label="Stuff"/></Link>
                <ToolbarTitle text="SomeApp"/>
                <FontIcon className="muidocs-icon-custom-sort" />
              </ToolbarGroup>

              <Route exact path="/" component={Main}/>
              <Route path="/stuff/:stuffId" component={Stuff}/>

            </div>
          </Router></div>
        )
      }
    }

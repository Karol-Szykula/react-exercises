import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Counter from './Counter/Counter'
import PassingProps from './PassingProps'
import Navigation from './Navigation/Navigation'
import MenuItem from './Navigation/MenuItem'
import FetchUsers from './FetchUsers/FetchUsers';

class App extends Component {

  state = {
    isDrawerOpen: false
  }

  toggleDrawer = () => this.setState({ isDrawerOpen: !this.state.isDrawerOpen })

  handleClose = () => this.setState({ isDrawerOpen: false })


  render() {
    return (
      <div>
        <Router>
          <div>
            <Navigation
              toggleDrawer={this.toggleDrawer}
              isDrawerOpen={this.state.isDrawerOpen}
              title="React">
              <MenuItem
                handleClose={this.handleClose}
                to="/counter"
                text="Counter"
              />
              <MenuItem
                handleClose={this.handleClose}
                to="/counter-with-start-value"
                text="Counter-with-start-value"
              />
              <MenuItem
                handleClose={this.handleClose}
                to="/passing-props"
                text="Passing-props"
              />
              <MenuItem
                handleClose={this.handleClose}
                to="/fetch-users"
                text="Fetch-users"
              />
            </Navigation>

            <Route path="/counter" component={() => <Counter startValue={1} />} />
            <Route path="/counter-with-start-value" component={() => <Counter startValue={15} />} />
            <Route path="/passing-props" exact={true} component={() => <PassingProps passingValue={5} passingFun={() => alert('bu!')} />} />
            <Route path="/fetch-users" exact={true} component={() => <FetchUsers />} />

          </div>
        </Router>
      </div>
    )
  }
}

export default App
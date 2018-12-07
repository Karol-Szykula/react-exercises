import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Counter from './Counter/Counter'
import PassingProps from './PassingProps'
import Navigation from './Navigation/Navigation'

class App extends Component {
  render() {
    return (
      <div>

        <Navigation />
        {/* <Router>
          <div>
            <div>
              <ul>
                <li><Link to='/counter'>Counter</Link></li>
                <li><Link to='/counter-with-start-value'>Counter with start value</Link></li>
                <li><Link to='/passing-props'>Passing props</Link></li>
              </ul>
            </div>
            <Route path="/counter" component={() => <Counter startValue={1} />} />
            <Route path="/counter-with-start-value" component={() => <Counter startValue={15} />} />
            <Route path="/passing-props" exact={true} component={() => <PassingProps passingValue={5} passingFun={() => alert('bu!')} />} />
          </div>
        </Router> */}
      </div>
    )
  }
}

export default App
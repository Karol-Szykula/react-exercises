import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Navigation from './../Navigation/Navigation'

import route from './../route'

class Router extends React.Component {

    state = {
        isDrawerOpen: false
    }

    toggleDrawer = () => this.setState({ isDrawerOpen: !this.state.isDrawerOpen })

    handleClose = () => this.setState({ isDrawerOpen: false })

    render() {
        return (
            <Navigation
                toggleDrawer={this.toggleDrawer}
                isDrawerOpen={this.state.isDrawerOpen}
                title="React"
            >

            </Navigation>
        )
    }
}

export default Router
import React from 'react'

import SideBar from './SideBar'
import TopBar from './TopBar'

class Navigation extends React.Component {

    constructor(props) {
        super(props)

        this.state = { open: false }
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    handleClose = () => this.setState({ open: false });

    render() {
        return (
            <div>
                <TopBar
                    title={'React'}
                    handleToggle={this.handleToggle}
                />
                <SideBar
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={this.handleToggle}
                >
                    {this.props.children}
                </SideBar>
            </div>
        )
    }
}

export default Navigation
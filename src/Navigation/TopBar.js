import React from 'react'

import AppBar from 'material-ui/AppBar'

class TopBar extends React.Component {
    render() {
        return (
            <AppBar
                title={'React'}
                onLeftIconButtonClick={this.props.handleToggle}
            >

            </AppBar>
        )
    }
}

export default TopBar
import React from 'react'

import Drawer from 'material-ui/Drawer'
import NavListItem from './NavListItem'

const Sidebar = (props) => (
    <Drawer
        docked={props.docked}
        width={props.width}
        open={props.open}
        onRequestChange={props.onRequestChange}
    >
        {
            props.children &&
                props.children.map
                ?
                props.children.map((child) => (
                    <NavListItem>
                        {child}
                    </NavListItem>
                ))
                :
                null
        }
    </Drawer>
)

export default Sidebar
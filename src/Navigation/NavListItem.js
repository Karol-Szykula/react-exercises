import React from 'react'

import { ListItem } from 'material-ui/List'

// style = {
//     navListItem: {
//         textDecoration: none
//     }
// }

class NavListItem extends React.Component {

    render() {
        return (
            <ListItem
                // style={style.navListItem}
            >
                {this.props.children}
            </ListItem>
        )
    }
}

export default NavListItem
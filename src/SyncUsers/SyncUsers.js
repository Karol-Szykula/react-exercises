import React from 'react'

import { database } from './../firebaseConfig'

const dbRef = database.ref('/jfddl6/randomusers')

class SyncUsers extends React.Component {

    state = {
        users: null
    }

    componentDidMount() {
        dbRef.once('value').then((snapshot) => {
            this.setState({ users: snapshot.val().results })
        });
    }

    render() {

        return (
            <div>
                {
                    <ul>
                        {
                            this.state.users &&
                                this.state.users.map
                                ?
                                this.state.users.map((user) => (
                                    <li
                                        key={user.email}
                                    >
                                        {`${user.name.first} ${user.name.last}: ${user.email}`}
                                    </li>
                                ))
                                :
                                'Loading'
                        }
                    </ul>
                }
            </div>
        )
    }
}

export default SyncUsers
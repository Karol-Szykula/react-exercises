import React from 'react'

class FetchUsers extends React.Component {

    state = {
        users: null
    }

    componentDidMount() {
        fetch(`https://randomuser.me/api/?results=${10}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ users: data.results })
            })
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

export default FetchUsers
import { Link } from 'react-router-dom'

import Counter from './Counter/Counter'
import PassingProps from './PassingProps'
import Navigation from './Navigation/Navigation'
import FetchUsers from './FetchUsers/FetchUsers'
import SyncUsers from './SyncUsers/SyncUsers'

export default (props) => {

    const routes = [{
        component: Counter, // import it
        path: './Counter/Counter',
        label: 'Link to  Counter',
        key: '1' // some random key

    }, {
        component: PassingProps, // import it
        path: './PassingProps',
        label: 'Link to  PassingProps',
        key: '2' // some random key

    }, {
        component: Navigation, // import it
        path: './Navigation/Navigation',
        label: 'Link to  Navigation',
        key: '3' // some random key

    }, {
        component: FetchUsers, // import it
        path: './FetchUsers/FetchUsers',
        label: 'Link to  FetchUsers',
        key: '4' // some random key

    }, {
        component: SyncUsers, // import it
        path: './SyncUsers/SyncUsers',
        label: 'Link to  SyncUsers',
        key: '5' // some random key

    },]

}

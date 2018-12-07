import React from 'react'

import PassingPropsBis from './PassingPropsBis'

class PassingPropsPrim extends React.Component {

    render() {
        return (
            <div>
                <PassingPropsBis
                    passingValue={this.props.passingValue}
                    passingFun={this.props.passingFun}
                />
            </div>
        )
    }
}


export default PassingPropsPrim
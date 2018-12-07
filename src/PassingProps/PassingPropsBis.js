import React from 'react'

class PassingPropsBis extends React.Component {

    onButtonClickHandler = () => {
        this.props.passingFun()
    }

    render() {
        return (
            <div>
                <h4>{this.props.passingValue}</h4>
                <button
                    onClick={this.onButtonClickHandler}
                >
                    PassingFun
                </button>
            </div>
        )
    }
}


export default PassingPropsBis
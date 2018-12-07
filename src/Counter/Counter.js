import React from 'react'
import PropTypes from 'prop-types'

class Counter extends React.Component {

    static defaultProps = {
        counterValue: 3
    }

    state = {
        counterValue: this.props.startValue
    }

    onClickIncButtonHandler = () => {
        this.setState({ counterValue: this.state.counterValue + 1 })
    }

    onClickDecButtonHandler = () => {
        this.setState({ counterValue: this.state.counterValue - 1 })
    }

    render() {
        return (
            <div >
                <h1>{this.state.counterValue}</h1>
                <button
                    onClick={this.onClickIncButtonHandler}
                >
                    +
                </button>
                <button
                    onClick={this.onClickDecButtonHandler}
                >
                    -
                </button>
            </div>
        )
    }
}

Counter.propTypes = {
    startValue: PropTypes.number.isRequired
}

export default Counter
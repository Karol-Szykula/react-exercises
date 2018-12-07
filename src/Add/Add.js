import React from 'react'

import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'

import { setFirstValue, setSecondValue } from './../State/add'

class Add extends React.Component {

    render() {

        return (
            <div>
                <div>
                    <h1>
                        {(this.props._firstValue + this.props._secondValue) || 0}
                    </h1>
                </div>
                <div>
                    <TextField
                        name={'one'}
                        type={'number'}
                        value={this.props._firstValue}
                        onChange={this.props._setFirstValue}
                    />
                </div>
                <div>
                    <TextField
                        name={'two'}
                        type={'number'}
                        value={this.props._secondValue}
                        onChange={this.props._setSecondValue}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    _firstValue: state.add.firstValue,
    _secondValue: state.add.secondValue
})

const mapDispatchToProps = (dispatch) => ({
    _setFirstValue: (event) => dispatch(setFirstValue(parseInt(event.target.value))),
    _setSecondValue: (event) => dispatch(setSecondValue(parseInt(event.target.value)))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Add)
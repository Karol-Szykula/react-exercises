const SET_FIRST_VALUE = 'add/SET_FIRST_VALUE'
const SET_SECOND_VALUE = 'add/SET_SECOND_VALUE'

export const setFirstValue = (value) => ({
    type: SET_FIRST_VALUE,
    value
})

export const setSecondValue = (value) => ({
    type: SET_SECOND_VALUE,
    value
})

const INITIAL_STATE = {
    firstValue: 0,
    secondValue: 0
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case SET_FIRST_VALUE:
            return {
                ...state,
                firstValue: parseInt(action.value)
            }

        case SET_SECOND_VALUE:
            return {
                ...state,
                secondValue: parseInt(action.value)
            }

        default: return state
    }
}
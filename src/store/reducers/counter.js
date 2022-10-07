const INITIAL_STATE = {
    count: 0,
}

export function counter(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return {
                ...state,
                count: state.count + 1
            }
        case 'DECREMENT_COUNTER':
            return {
                ...state,
                count: state.count - 1
            }

        default:
            return state
    }
}
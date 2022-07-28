const initialState = {
    count: 0,
    starValue: 0
};


function RootReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD': {
            return {
                count: state.count + 1,
                starValue: state.starValue
            }
        }
        case 'REDUCE': {
            let a = state.count
            if (a >= 1) {
                return {
                    count: state.count - 1,
                    starValue: state.starValue
                }
            } else
                return {
                    count: state.count,
                    starValue: state.starValue
                }

        }
        case 'RESET': {
            return {
                count: 0,
                starValue: state.starValue
            }
        }
        case 'CHANGE_STAR': {
            return {
                starValue: action.payload,
                count: state.count

            }
        }
        default:
            return state
    }
}

export default RootReducer;

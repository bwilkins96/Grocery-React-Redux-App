const ADD = 'cart/ADD';

export const addToCart = (produceId) => {
    return {
        type: ADD,
        produceId: produceId
    }
}

const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD:
            let newState = {...state};
            newState[action.produceId] = {
                id: action.produceId,
                count: 1
            }
            return newState;
        default:
            return state;
    }
}

export default cartReducer;

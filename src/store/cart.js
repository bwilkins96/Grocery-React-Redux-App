const ADD = 'cart/ADD';
const REMOVE = 'cart/REMOVE';

export const addToCart = (produceId) => {
    return {
        type: ADD,
        produceId: produceId
    }
}

export const removeFromCart = (produceId) => {
    return {
        type: REMOVE,
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
        case REMOVE:
            let newStateB = {...state};
            delete newStateB[action.produceId];
            return newStateB;
        default:
            return state;
    }
}

export default cartReducer;

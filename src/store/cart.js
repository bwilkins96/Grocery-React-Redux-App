const ADD = 'cart/ADD';
const REMOVE = 'cart/REMOVE';
const CHANGE = 'cart/CHANGE';
const EMPTY = 'cart/EMPTY';

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

export const updateCartCount = (produceId, newCount) => {
    return {
        type: CHANGE,
        produceId: produceId,
        newCount: newCount
    }
}

export const purchaseFromCart = () => {
    return {
        type: EMPTY,
        payload: 'none :)'
    }
}

const cartReducer = (state = {}, action) => {
    if (action.newCount <= 0) {action.type = REMOVE}
    if ((action.type === ADD) && (state[action.produceId]) && (state[action.produceId].count >= 1)) {
        action.type = CHANGE;
        action.newCount = state[action.produceId].count + 1;
    }

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
        case CHANGE:
            //if (action.newCount < 1) {return }
            let newStateC = {...state};
            newStateC[action.produceId] = {
                id: action.produceId,
                count: action.newCount
            }
            return newStateC;
        case EMPTY:
            return {};
        default:
            return state;
    }
}

export default cartReducer;

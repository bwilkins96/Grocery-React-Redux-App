import produceDate from "../mockData/produce.json";

const POPULATE = 'produce/POPULATE';
const LIKE = 'produce/LIKE';

export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: produceDate
    }
}

export const likeProduce = (id) => {
    return {
        type: LIKE,
        produceId: id
    }
}

export const getAllProduce = (state) => Object.values(state.produce);

const produceReducer = (state = {}, action) => {
    switch (action.type) {
        case POPULATE:
            let produceObj = {};
            action.produce.forEach(prod => {
                produceObj[prod.id] = prod;
            });
            return { ...state, ...produceObj }
        case LIKE:
            let newState = {...state};
            newState[action.produceId].liked = !newState[action.produceId].liked;
            return newState;
        default:
            return state;
    }
}

export default produceReducer;

import produceDate from "../mockData/produce.json";

const POPULATE = 'produce/POPULATE'

export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: produceDate
    }
}

const produceReducer = (state = {}, action) => {
    switch (action.type) {
        case POPULATE:
            let produceObj = {};
            action.produce.forEach(prod => {
                produceObj[prod.id] = prod;
            })
            return { ...state, ...produceObj }
        default:
            return state;
    }
}

export default produceReducer;

import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_ORDER':
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case 'CREATE_ORDER':
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
};

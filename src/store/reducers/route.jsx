import * as actionTypes from '../actions/actionTypes';

const initialState = {
    route: 'landingpage'
}

const routeReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.ROUTE: 
            return {
                ...state,
                route: action.value
            }
    }
    return state;
}

export default routeReducer;
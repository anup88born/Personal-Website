import * as actionTypes from '../actions/actionTypes';

const initialState = {
    imageUrl: ''
}

const imageUrlReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.IMAGEURL_DELETE: 
            return {
                ...state,
                user: action.value
            }
    }
    return state
}

export default imageUrlReducer;
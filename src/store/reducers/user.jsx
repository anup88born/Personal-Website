import * as actionTypes from '../actions/actionTypes';

const initialState = {
    user: {
        id: '',
        name: '',
        email: '',
        password: '',
        entries: '',
        joined: ''
      }
}

const userReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.USER_DELETE: 
            return {
                ...state,
                user: action.payload
            }
    }
    return state
}

export default userReducer;
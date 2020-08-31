import * as actionTypes from '../actions/actionTypes';

const initialState = {
    anup: {
        firstName: 'Anup',
        lastName: 'Padakandla',
        date_of_birth: '21-06-1988',
        age: 31,
        address: 'Girinagar',
        email: 'anuppadakandla064@gmail.com'
      }
}

const anupReducer = (state=initialState, action) => {
    // switch(action.type) {
    //     case actionTypes.ANUP: 
    //         return {
    //             ...state
    //         }
    // }
    return state;
}

export default anupReducer;
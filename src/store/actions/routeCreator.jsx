import * as actionTypes from './actionTypes';

export const route = (route) => {
    return {
        type: actionTypes.ROUTE,
        value: route
    }
}
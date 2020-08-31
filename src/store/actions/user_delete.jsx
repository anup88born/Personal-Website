import * as actionTypes from './actionTypes';

export const user_delete = () => {
    return {
        type: actionTypes.USER_DELETE,
        payload: {
            id: '',
            name: '',
            email: '',
            password: '',
            entries: '',
            joined: ''
        }
    }
}
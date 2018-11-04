import * as actionTypes from './actionTypes'
export const getUsers = (users, loading) => {
    return {
        type: actionTypes.GETUSERS,
        users: users,
        loading: loading
    }
}
export const initUsers = () => {
    return {
        type: actionTypes.INITUSERS
    };
};  

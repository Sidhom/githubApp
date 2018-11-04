import * as actionTypes from '../actions/actionTypes'
const initialstate = {
    users: [],
    loading: true
}
const reducer = (state = initialstate, action) => {
    switch(action.type){
      case actionTypes.GETUSERS: 
      return {
        ...state,
        users: action.users,
        loading: false
      };
     default: return state;
    }
};

export default reducer;
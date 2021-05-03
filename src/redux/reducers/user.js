import actionTypes from "../actionTypes";

const initialState = {
  user: {},
};
function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case actionTypes.SET_USER:
      return { ...state, user: payload };
    default:
      return state;
  }
}

export default userReducer;

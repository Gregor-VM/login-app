import actionTypes from "../actionTypes";

const initialState = {
  profileId: null,
};
function profileReducer(state = initialState, { type, payload }) {
  switch (type) {
    case actionTypes.SET_PROFILE_ID:
      return { ...state, profileId: payload };
    default:
      return state;
  }
}

export default profileReducer;

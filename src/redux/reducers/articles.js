import actionTypes from "../actionTypes";

const initialState = {
  articles: [],
};
function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case actionTypes.ADD_ARTICLE:
      return { ...state, articles: [...state.articles, payload] };
    case actionTypes.SET_ARTICLE:
      return { ...state, articles: payload };
    default:
      return state;
  }
}

export default userReducer;

import actionTypes from "../actionTypes";

const initialState = {
  articles: [],
};
function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case actionTypes.ADD_ARTICLE:
      if (payload?.length) {
        return { ...state, articles: [...state.articles, ...payload] };
      } else {
        if (payload?.name) {
          return { ...state, articles: [...state.articles, payload] };
        } else {
          return state;
        }
      }

    case actionTypes.SET_ARTICLE:
      return { ...state, articles: payload };
    default:
      return state;
  }
}

export default userReducer;

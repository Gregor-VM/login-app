import actionTypes from "../actionTypes";

const initialState = {
  editing: false,
  editingDoc: {},
};
function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case actionTypes.SET_EDITING:
      return { ...state, editing: payload };
    case actionTypes.SET_EDITING_DOC:
      return { ...state, editingDoc: payload };
    default:
      return state;
  }
}

export default userReducer;

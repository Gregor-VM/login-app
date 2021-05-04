import actionTypes from "../actionTypes";

const userActions = {
  setEditing: (bool) => ({
    type: actionTypes.SET_EDITING,
    payload: bool,
  }),
  setEditingDoc: (doc) => ({
    type: actionTypes.SET_EDITING_DOC,
    payload: doc,
  }),
};

export default userActions;

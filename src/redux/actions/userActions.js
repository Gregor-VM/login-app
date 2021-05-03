import actionTypes from "../actionTypes";

const userActions = {
  setUser: (user) => ({
    type: actionTypes.SET_USER,
    payload: user,
  }),
};

export default userActions;

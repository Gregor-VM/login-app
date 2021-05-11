import actionTypes from "../actionTypes";

const profileActions = {
  setProfileId: (id) => ({
    type: actionTypes.SET_PROFILE_ID,
    payload: id,
  }),
};

export default profileActions;

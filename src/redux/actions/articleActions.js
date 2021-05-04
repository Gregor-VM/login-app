import actionTypes from "../actionTypes";

const userActions = {
  setArticles: (articles) => ({
    type: actionTypes.SET_ARTICLE,
    payload: articles,
  }),
  addArticle: (article) => ({
    type: actionTypes.ADD_ARTICLE,
    payload: article,
  }),
};

export default userActions;

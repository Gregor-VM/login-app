import React, { useEffect, useCallback } from "react";
import ArticleItem from "./ArticleItem";
import { db } from "../firebase";
import { useSelector, useDispatch } from "react-redux";
import articleActions from "../redux/actions/articleActions";

function Articles() {
  const articles = useSelector((state) => state.articles.articles);
  const dispatch = useDispatch();

  const getArticlesCallback = useCallback(async () => {
    dispatch(articleActions.setArticles([]));

    const ref = db.collection("articles").orderBy("date");
    const data = await ref.get();

    data.docs.forEach((item, i) => {
      dispatch(articleActions.addArticle(item.data()));
    });
  }, [dispatch]);

  useEffect(() => {
    getArticlesCallback();
    return () => dispatch(articleActions.setArticles([]));
  }, [getArticlesCallback, dispatch]);

  const handleLoadMore = (e) => {
    e.preventDefault();
  };

  return (
    <div className="card mt-4 mx-1 row p-4">
      <div className="card-body col-12">
        <h4 className="text-center">Last Articles:</h4>
        {articles.length > 0
          ? articles.map((item, i) => <ArticleItem {...item} key={i} />)
          : null}
        <a href="/#" className="text-center d-block" onClick={handleLoadMore}>
          Load More!
        </a>
      </div>
    </div>
  );
}

export default Articles;

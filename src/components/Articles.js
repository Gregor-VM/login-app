import React, { useEffect, useState, useCallback } from "react";
import ArticleItem from "./ArticleItem";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import articleActions from "../redux/actions/articleActions";
import firebaseUtils from "../utils/firebase_utils";
import Loading from "./Loading";

function Articles({ id }) {
  const articlesRedux = useSelector((state) => state.articles.articles);
  const [last, setLast] = useState("");
  const [loading, setLoading] = useState(true);
  const [refreshLoading, setRefreshLoading] = useState(false);
  const [noMore, setNoMore] = useState(false);
  const [articlesState, setArticlesState] = useState([]);

  const location = useLocation();
  const isProfile = location.pathname === "/profile";

  const dispatch = useDispatch();
  const loadArticlesCallback = useCallback(
    (refresh) => {
      if (articlesRedux.length > 0 && !isProfile && !refresh) {
        setLoading(false);
        return null;
      }
      //dispatch(articleActions.setArticles([]));
      //setLoading(true);
      if (id === undefined && isProfile) {
        return null;
      }
      setRefreshLoading(refresh);
      const queryId = id ? id : false;
      firebaseUtils.firstArticles(queryId).then(({ articles, lastKey }) => {
        if (!id) dispatch(articleActions.setArticles(articles));
        if (id) setArticlesState(articles);
        setLast(lastKey);
        setLoading(false);
        setRefreshLoading(false);
      });
    },
    [dispatch, id, articlesRedux, isProfile]
  );

  useEffect(() => {
    let mounted = true;
    if (mounted) loadArticlesCallback(false);
    return () => (mounted = false);
  }, [loadArticlesCallback]);

  const handleLoadMore = (e) => {
    setLoading(true);
    e.preventDefault();
    const queryId = id ? id : false;
    firebaseUtils.nextArticles(last, queryId).then(({ articles, lastKey }) => {
      if (!id) dispatch(articleActions.addArticle(articles));
      if (id && articles.length > 0)
        setArticlesState((prev) => [...prev, ...articles]);
      setLast(lastKey);
      if (articles.length === 0) {
        setNoMore(true);
      }
      setLoading(false);
    });
  };

  return (
    <div className="card mt-4 mx-1 row p-4 shadow">
      <div className="card-body col-12">
        <div className="d-flex justify-content-between">
          <h4 className="text-center m-0">Last Articles:</h4>
          {refreshLoading ? (
            <Loading />
          ) : (
            <i
              className="fas fa-sync-alt border rounded p-2 hover"
              onClick={() => loadArticlesCallback(true)}
            ></i>
          )}
        </div>
        {articlesRedux.length > 0 && !isProfile
          ? articlesRedux.map((item, i) => <ArticleItem {...item} key={i} />)
          : null}
        {articlesState.length > 0 && isProfile
          ? articlesState.map((item, i) => <ArticleItem {...item} key={i} />)
          : null}
        {articlesState.length === 0 && isProfile && !loading && (
          <p className="my-2 text-center">This account doesn't have articles</p>
        )}
        {articlesRedux.length === 0 && !isProfile && !loading && (
          <p className="my-2 text-center">
            Nobody has uploaded anything be the first!
          </p>
        )}
        {noMore && !loading ? (
          <span>No more articles :(</span>
        ) : (
          !loading && (
            <a
              href="/#"
              className="text-center d-block"
              onClick={handleLoadMore}
            >
              Load More!
            </a>
          )
        )}
        {loading && <Loading center={true} />}
      </div>
    </div>
  );
}

export default Articles;

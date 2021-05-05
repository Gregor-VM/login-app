import React, { useEffect, useState, useCallback } from "react";
import ArticleItem from "./ArticleItem";
import { useSelector, useDispatch } from "react-redux";
import articleActions from "../redux/actions/articleActions";
import firebaseUtils from "../utils/firebase_utils";
import Loading from "./Loading";

function Articles() {
  const articlesRedux = useSelector((state) => state.articles.articles);
  const [last, setLast] = useState("");
  const [loading, setLoading] = useState(true);
  const [refreshLoading, setRefreshLoading] = useState(false);
  const [noMore, setNoMore] = useState(false);
  const [mounted, setMounted] = useState(true);

  const dispatch = useDispatch();
  const loadArticlesCallback = useCallback(
    (refresh, init = true) => {
      if (!init) setLoading(false);
      setRefreshLoading(refresh);
      firebaseUtils.firstArticles().then(({ articles, lastKey }) => {
        dispatch(articleActions.setArticles(articles));
        setLast(lastKey);
        setLoading(false);
        setRefreshLoading(false);
      });
    },
    [dispatch]
  );

  useEffect(() => {
    const init = articlesRedux.length === 0;
    if (mounted) loadArticlesCallback(false, init);
    return () => setMounted(false);
  }, [loadArticlesCallback, mounted, articlesRedux.length]);

  const handleLoadMore = (e) => {
    setLoading(true);
    e.preventDefault();
    firebaseUtils.nextArticles(last).then(({ articles, lastKey }) => {
      dispatch(articleActions.addArticle(articles));
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
        {articlesRedux.length > 0
          ? articlesRedux.map((item, i) => <ArticleItem {...item} key={i} />)
          : null}
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

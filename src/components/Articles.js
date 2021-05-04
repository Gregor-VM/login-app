import React, { useEffect, useState } from "react";
import ArticleItem from "./ArticleItem";
import { useSelector, useDispatch } from "react-redux";
import articleActions from "../redux/actions/articleActions";
import firebaseUtils from "../utils/firebase_utils";
import Loading from "./Loading";

function Articles() {
  const articlesRedux = useSelector((state) => state.articles.articles);
  const [last, setLast] = useState("");
  const [loading, setLoading] = useState(true);
  const [noMore, setNoMore] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    firebaseUtils.firstArticles().then(({ articles, lastKey }) => {
      dispatch(articleActions.setArticles(articles));
      setLast(lastKey);
      setLoading(false);
    });
    //return () => dispatch(articleActions.setArticles([]));
  }, [dispatch]);

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
    <div className="card mt-4 mx-1 row p-4">
      <div className="card-body col-12">
        <h4 className="text-center">Last Articles:</h4>
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

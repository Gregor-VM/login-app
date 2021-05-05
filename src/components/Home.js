import React from "react";
import { useSelector } from "react-redux";
import { useBackground } from "../hooks/useBackground";
import WriteArticle from "./WriteArticle";
import NavBar from "./NavBar";
import Articles from "./Articles";

function Home() {
  const user = useSelector((state) => state.user.user);

  useBackground(false);
  return (
    <>
      <NavBar user={user} />
      <div className="container">
        <WriteArticle />
        <Articles />
      </div>
    </>
  );
}

export default Home;

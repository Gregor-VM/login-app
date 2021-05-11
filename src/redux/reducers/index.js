import { combineReducers } from "redux";
import user from "./user";
import articles from "./articles";
import editing from "./editing";
import profile from "./profile";

export default combineReducers({ user, articles, editing, profile });

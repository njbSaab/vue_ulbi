import axios from "axios";
import { API_URL_POSTS } from "../const/api";
import { API_URL_IMG } from "../const/api";

export const getPostLimits = async (page) => {
  return await axios.get(API_URL_POSTS + page);
};
export const getImg = async () => {
  return await axios.get(API_URL_IMG);
};

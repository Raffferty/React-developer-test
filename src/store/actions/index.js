import * as actionTypes from "./actionTypes";
import axios from "../../axios/";

const fetchStart = () => {
  return {
    type: actionTypes.FETCH_NEWS_START
  };
};

const fetchNewsSuccess = news => {
  return {
    type: actionTypes.FETCH_NEWS_SUCCESS,
    news: news
  };
};

const fetchFail = error => {
  return {
    type: actionTypes.FETCH_NEWS_FAIL,
    error: error
  };
};

export const fetchNews = () => {
  return dispatch => {
    dispatch(fetchStart());

    return axios
      .get()
      .then(topHeadlines => {
        if (!(topHeadlines?.data?.articles?.length >= 20)) {
          return dispatch(fetchFail("Not inough News!"));
        }

        const randomIndex = Math.floor(Math.random() * 20);

        const topHeadlinesNews = topHeadlines.data.articles[randomIndex].title;
        dispatch(fetchNewsSuccess(topHeadlinesNews));
      })
      .catch(error => dispatch(fetchFail(error)));
  };
};

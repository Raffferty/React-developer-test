import * as actionTypes from "../actions/actionTypes";

const initialState = {
  news: "",
  isLoading: true,
  error: false
};

const fetchNewsStart = state => {
  return {
    ...state,
    isLoading: true
  };
};

const fetchNewsSuccess = (_, action) => {
  return {
    news: action.news,
    isLoading: false,
    error: false
  };
};

const fetchNewsFail = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: action.error
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_NEWS_START:
      return fetchNewsStart(state, action);
    case actionTypes.FETCH_NEWS_SUCCESS:
      return fetchNewsSuccess(state, action);
    case actionTypes.FETCH_NEWS_FAIL:
      return fetchNewsFail(state, action);
    default:
      return state;
  }
};

export default reducer;

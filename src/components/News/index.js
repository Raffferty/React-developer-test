import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/";
import Spinner from "../UI/Spinner/";

const News = ({ isLoading, news, error, onFetchNews }) => {
  useEffect(() => {
    onFetchNews();
  }, [onFetchNews]);

  if (isLoading) {
    return (
      <div>
        <h3>Powered by News API</h3>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h3 className="Error">{error}</h3>
      </div>
    );
  }

  return (
    <div>
      <h3>Powered by News API</h3>
      <div className="Main">{news}</div>;
    </div>
  );
};

const mapStateToProps = state => {
  return {
    news: state.news,
    isLoading: state.isLoading,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchNews: () => dispatch(actions.fetchNews())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) => {
  return <h1>TV</h1>;
};

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TVPresenter;
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  error,
  loading,
  handleSubmit,
}) => {
  return <h1>Search</h1>;
};

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchPresenter;

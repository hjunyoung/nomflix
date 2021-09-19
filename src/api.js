import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: process.env.REACT_APP_MOVIE_API,
    language: 'en-US',
  },
});

export const tvApi = {
  topRated() {
    return api.get('tv/top_rated');
  },
  popular() {
    return api.get('tv/popular');
  },
  airingToday() {
    return api.get('tv/airing_today');
  },
  showDetail(id) {
    return api.get(`tv/${id}`, {
      params: {
        append_to_response: 'videos,images',
      },
    });
  },
  search(term) {
    return api.get('search/tv', {
      params: {
        query: term,
      },
    });
  },
};

export const moviesApi = {
  nowPlaying() {
    return api.get('movie/now_playing');
  },
  upcoming() {
    return api.get('movie/upcoming');
  },
  popular() {
    return api.get('movie/popular');
  },
  movieDetail(id) {
    return api.get(`movie/${id}`, {
      params: {
        append_to_response: 'videos,images',
      },
    });
  },
  search(term) {
    return api.get('search/movie', {
      params: {
        query: term,
      },
    });
  },
};

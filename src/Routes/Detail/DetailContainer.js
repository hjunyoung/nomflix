import { moviesApi, tvApi } from 'api';
import React from 'react';
import DetailPresenter from './DetailPresenter';

class DetailContainer extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes('/movie/'),
      trailerView: false,
      collectionView: false,
      seasonView: false,
      creatorView: false,
    };
  }

  toggleView = (event) => {
    const { innerText: view } = event.target;

    if (view.includes('Trailers')) {
      return this.setState((prevState) => ({
        trailerView: !prevState.trailerView,
        collectionView: false,
        seasonView: false,
        creatorView: false,
      }));
    }
    if (view.includes('Collection')) {
      return this.setState((prevState) => ({
        trailerView: false,
        collectionView: !prevState.collectionView,
        seasonView: false,
        creatorView: false,
      }));
    }
    if (view.includes('Seasons')) {
      return this.setState((prevState) => ({
        trailerView: false,
        collectionView: false,
        seasonView: !prevState.seasonView,
        creatorView: false,
      }));
    }
    if (view.includes('Creators')) {
      return this.setState((prevState) => ({
        trailerView: false,
        collectionView: false,
        seasonView: false,
        creatorView: !prevState.creatorView,
      }));
    }
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { goBack },
    } = this.props;

    const parsedId = Number(id);
    if (isNaN(parsedId)) {
      return goBack();
    }

    const { isMovie } = this.state;
    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const {
      result,
      error,
      loading,
      trailerView,
      collectionView,
      seasonView,
      creatorView,
    } = this.state;
    return (
      <DetailPresenter
        result={result}
        error={error}
        loading={loading}
        trailerView={trailerView}
        collectionView={collectionView}
        seasonView={seasonView}
        creatorView={creatorView}
        toggleView={this.toggleView}
      />
    );
  }
}

export default DetailContainer;

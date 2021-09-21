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
    };
  }

  toggleView = (event) => {
    const {
      target: { innerText: view },
    } = event;

    if (view === 'Trailers') {
      return this.setState((prevState) => ({
        trailerView: !prevState.trailerView,
        collectionView: false,
        seasonView: false,
      }));
    }
    if (view === 'Collection') {
      return this.setState((prevState) => ({
        trailerView: false,
        collectionView: !prevState.collectionView,
        seasonView: false,
      }));
    }
    if (view === 'Seasons') {
      return this.setState((prevState) => ({
        trailerView: false,
        collectionView: false,
        seasonView: !prevState.seasonView,
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
    const { result, error, loading, trailerView, collectionView, seasonView } =
      this.state;
    return (
      <DetailPresenter
        result={result}
        error={error}
        loading={loading}
        trailerView={trailerView}
        collectionView={collectionView}
        seasonView={seasonView}
        toggleView={this.toggleView}
      />
    );
  }
}

export default DetailContainer;

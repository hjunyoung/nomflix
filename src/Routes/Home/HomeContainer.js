import React from 'react';
import HomePresenter from './HomePresenter';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nowPlaying: null,
      upcoming: null,
      popular: null,
      error: null,
      loading: true,
    };
  }


  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}

export default HomeContainer;

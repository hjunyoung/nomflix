import { collectionsApi } from 'api';
import React from 'react';
import CollectionPresenter from './CollectionPresenter';

class CollectionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      error: null,
      loading: true,
    };
  }

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

    let result = null;
    try {
      ({ data: result } = await collectionsApi.collectionDetail(parsedId));
    } catch {
      this.setState({ error: "Can't find collection information" });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return (
      <CollectionPresenter result={result} error={error} loading={loading} />
    );
  }
}

export default CollectionContainer;

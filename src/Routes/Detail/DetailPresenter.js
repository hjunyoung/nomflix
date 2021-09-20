import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: -1;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-size: cover;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 20px;
`;

const Title = styled.h3`
  font-size: 32px;
  font-weight: 600;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  opacity: 0.7;
  line-height: 1.4;
  width: 50%;
`;

const DetailPresenter = ({ result, error, loading }) => {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      <Backdrop
        bgImage={
          result.backdrop_path
            ? `https://image.tmdb.org/t/p/original${result.backdrop_path}`
            : `https://image.tmdb.org/t/p/w500${result.poster_path}`
        }
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/w500${result.poster_path}`
              : require('../../assets/noPoster.png').default
          }
        />
        <Data>
          <Title>{result.original_title || result.original_name}</Title>
          <ItemContainer>
            <Item>
              {result.release_date?.substring(0, 4) ||
                result.first_air_date?.substring(0, 4)}
            </Item>
            <Divider>•</Divider>
            <Item>{result.runtime || result.episode_run_time?.[0]} mins</Item>
            <Divider>•</Divider>
            <Item>{result.genres?.map((genre) => genre.name).join(' / ')}</Item>
          </ItemContainer>
          <Overview>{result.overview || ''}</Overview>
        </Data>
      </Content>
    </Container>
  );
};

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
